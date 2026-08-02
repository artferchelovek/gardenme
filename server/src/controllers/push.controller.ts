import type { NextFunction, Request, Response } from "express";
import { z } from "zod";

import { PushService } from "../services/push.service.js";

const subscribeSchema = z.object({
  subscription: z.object({
    endpoint: z.string().url(),
    keys: z.object({
      p256dh: z.string(),
      auth: z.string(),
    }),
  }),
});

const unsubscribeSchema = z.object({
  endpoint: z.string().url(),
});

export class PushController {
  static getPublicKey(_req: Request, res: Response) {
    const key = PushService.getPublicKey();
    res.json({ publicKey: key });
  }

  static async subscribe(req: Request, res: Response, next: NextFunction) {
    try {
      const { subscription } = subscribeSchema.parse(req.body);
      await PushService.subscribe(req.userId!, subscription);
      res.status(201).json({ message: "Подписка на уведомления сохранена" });
    } catch (err) {
      next(err);
    }
  }

  static async unsubscribe(req: Request, res: Response, next: NextFunction) {
    try {
      const { endpoint } = unsubscribeSchema.parse(req.body);
      await PushService.unsubscribe(endpoint);
      res.json({ message: "Подписка удалена" });
    } catch (err) {
      next(err);
    }
  }
}
