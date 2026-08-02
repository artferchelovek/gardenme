import webPush from "web-push";

import { env } from "../config/env.js";
import { prisma } from "../config/prisma.js";

if (env.VAPID_PUBLIC_KEY && env.VAPID_PRIVATE_KEY) {
  webPush.setVapidDetails(
    env.VAPID_SUBJECT,
    env.VAPID_PUBLIC_KEY,
    env.VAPID_PRIVATE_KEY,
  );
}

export class PushService {
  /**
   * Save or update a PushSubscription for a user.
   */
  static async subscribe(
    userId: string,
    subscription: { endpoint: string; keys: { p256dh: string; auth: string } },
  ) {
    return prisma.pushSubscription.upsert({
      where: { endpoint: subscription.endpoint },
      update: {
        userId,
        p256dh: subscription.keys.p256dh,
        auth: subscription.keys.auth,
      },
      create: {
        userId,
        endpoint: subscription.endpoint,
        p256dh: subscription.keys.p256dh,
        auth: subscription.keys.auth,
      },
    });
  }

  /**
   * Unsubscribe push endpoint.
   */
  static async unsubscribe(endpoint: string) {
    return prisma.pushSubscription.deleteMany({
      where: { endpoint },
    });
  }

  /**
   * Send notification to all subscriptions of a specific user.
   */
  static async sendNotificationToUser(
    userId: string,
    payload: { title: string; body: string; data?: any },
  ) {
    if (!env.VAPID_PUBLIC_KEY || !env.VAPID_PRIVATE_KEY) {
      console.warn(
        "[PushService] VAPID keys not configured, skipping push notification",
      );
      return;
    }

    const subscriptions = await prisma.pushSubscription.findMany({
      where: { userId },
    });

    const notificationPayload = JSON.stringify(payload);

    const sendPromises = subscriptions.map(async (sub) => {
      const pushSub = {
        endpoint: sub.endpoint,
        keys: {
          p256dh: sub.p256dh,
          auth: sub.auth,
        },
      };

      try {
        await webPush.sendNotification(pushSub, notificationPayload);
      } catch (err: any) {
        if (err.statusCode === 410 || err.statusCode === 404) {
          // Subscription expired or invalid - remove from DB
          await prisma.pushSubscription
            .delete({ where: { id: sub.id } })
            .catch(() => {});
        } else {
          console.error("[PushService] Error sending push notification:", err);
        }
      }
    });

    await Promise.all(sendPromises);
  }

  /**
   * Get VAPID public key for frontend subscription setup.
   */
  static getPublicKey() {
    return env.VAPID_PUBLIC_KEY || null;
  }
}
