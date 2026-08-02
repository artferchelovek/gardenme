import type { NextFunction, Request, Response } from "express";
import { z } from "zod";

import { WateringService } from "../services/watering.service.js";

const waterPlantSchema = z.object({
  note: z.string().optional(),
});

export class WateringController {
  static async waterPlant(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id as string;
      const { note } = waterPlantSchema.parse(req.body || {});
      const log = await WateringService.logWatering(req.userId!, id, note);
      res.status(201).json(log);
    } catch (err) {
      next(err);
    }
  }

  static async getWateringHistory(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const id = req.params.id as string;
      const history = await WateringService.getWateringHistory(req.userId!, id);
      res.json(history);
    } catch (err) {
      next(err);
    }
  }
}
