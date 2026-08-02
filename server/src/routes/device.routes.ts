import { Router } from "express";

import { DeviceController } from "../controllers/device.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const deviceRouter = Router();

deviceRouter.use(authMiddleware);

deviceRouter.post("/", DeviceController.createDevice);
deviceRouter.get("/", DeviceController.getUserDevices);
deviceRouter.post("/:id/pair", DeviceController.pairWithPlant);
deviceRouter.delete("/:id", DeviceController.deleteDevice);
