import { Router } from 'express';
import { PushController } from '../controllers/push.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

export const pushRouter = Router();

pushRouter.get('/public-key', PushController.getPublicKey);
pushRouter.post('/subscribe', authMiddleware, PushController.subscribe);
pushRouter.post('/unsubscribe', authMiddleware, PushController.unsubscribe);
