import type { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { PlantService } from '../services/plant.service.js';

const createPlantSchema = z.object({
  name: z.string().min(1, 'Название растения обязательно'),
  species: z.string().optional(),
  location: z.string().optional(),
  minMoistureThreshold: z.number().min(0).max(100).optional(),
  targetMoistureLevel: z.number().min(0).max(100).optional(),
  deviceId: z.string().optional(),
});

const updatePlantSchema = z.object({
  name: z.string().min(1).optional(),
  species: z.string().optional(),
  location: z.string().optional(),
  minMoistureThreshold: z.number().min(0).max(100).optional(),
  targetMoistureLevel: z.number().min(0).max(100).optional(),
  deviceId: z.string().nullable().optional(),
});

export class PlantController {
  static async createPlant(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = createPlantSchema.parse(req.body);
      const plant = await PlantService.createPlant(req.userId!, dto);
      res.status(201).json(plant);
    } catch (err) {
      next(err);
    }
  }

  static async getUserPlants(req: Request, res: Response, next: NextFunction) {
    try {
      const plants = await PlantService.getUserPlants(req.userId!);
      res.json(plants);
    } catch (err) {
      next(err);
    }
  }

  static async getPlantDetails(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id as string;
      const plant = await PlantService.getPlantDetails(req.userId!, id);
      res.json(plant);
    } catch (err) {
      next(err);
    }
  }

  static async updatePlant(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id as string;
      const dto = updatePlantSchema.parse(req.body);
      const plant = await PlantService.updatePlant(req.userId!, id, dto);
      res.json(plant);
    } catch (err) {
      next(err);
    }
  }

  static async deletePlant(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id as string;
      await PlantService.deletePlant(req.userId!, id);
      res.json({ message: 'Растение удалено' });
    } catch (err) {
      next(err);
    }
  }
}
