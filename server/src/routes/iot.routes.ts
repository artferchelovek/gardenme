import { Router } from "express";

import { IotController } from "../controllers/iot.controller.js";
import { deviceAuthMiddleware } from "../middlewares/deviceAuth.middleware.js";

export const iotRouter = Router();

iotRouter.post("/reading", deviceAuthMiddleware, IotController.postReading);
