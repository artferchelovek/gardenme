/// <reference lib="webworker" />
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';

declare const self: ServiceWorkerGlobalScope;

self.skipWaiting();
cleanupOutdatedCaches();
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// App-shell fallback: any uncached navigation resolves to the cached shell
// so the SPA still boots offline instead of showing the browser's dino page.
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match('/index.html').then((res) => res ?? Response.error()))
    );
  }
});

interface PushPayload {
  title?: string;
  body?: string;
  data?: Record<string, unknown>;
}

self.addEventListener('push', (event) => {
  let payload: PushPayload = { title: '🌿 GardenMe', body: 'Пора проверить состояние растений!' };
  if (event.data) {
    try {
      payload = event.data.json();
    } catch {
      payload.body = event.data.text();
    }
  }

  event.waitUntil(
    self.registration.showNotification(payload.title || '🌿 GardenMe', {
      body: payload.body,
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      vibrate: [100, 50, 100],
      data: payload.data || {},
      actions: [{ action: 'open', title: 'Открыть' }],
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      const existing = clientList.find((c) => 'focus' in c);
      if (existing) return (existing as WindowClient).focus();
      return self.clients.openWindow('/');
    })
  );
});
