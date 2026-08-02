import { Router } from "express";

import { authRouter } from "./auth.routes.js";
import { deviceRouter } from "./device.routes.js";
import { iotRouter } from "./iot.routes.js";
import { plantRouter } from "./plant.routes.js";
import { pushRouter } from "./push.routes.js";

export const apiRouter = Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/devices", deviceRouter);
apiRouter.use("/iot", iotRouter);
apiRouter.use("/plants", plantRouter);
apiRouter.use("/push", pushRouter);

apiRouter.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});
