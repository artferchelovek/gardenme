import { Router } from "express";

import { PlantController } from "../controllers/plant.controller.js";
import { WateringController } from "../controllers/watering.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const plantRouter = Router();

plantRouter.use(authMiddleware);

plantRouter.post("/", PlantController.createPlant);
plantRouter.get("/", PlantController.getUserPlants);
plantRouter.get("/:id", PlantController.getPlantDetails);
plantRouter.put("/:id", PlantController.updatePlant);
plantRouter.delete("/:id", PlantController.deletePlant);

// Watering sub-routes
plantRouter.post("/:id/water", WateringController.waterPlant);
plantRouter.get("/:id/waterings", WateringController.getWateringHistory);
