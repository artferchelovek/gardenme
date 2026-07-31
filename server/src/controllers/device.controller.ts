import type { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { DeviceService } from '../services/device.service.js';

const createDeviceSchema = z.object({
  name: z.string().min(1, 'Название устройства обязательно'),
  macAddress: z.string().optional(),
  token: z.string().optional(),
});

const pairDeviceSchema = z.object({
  plantId: z.string().nullable(),
});

export class DeviceController {
  static async createDevice(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = createDeviceSchema.parse(req.body);
      const device = await DeviceService.createDevice(req.userId!, dto);
      res.status(201).json(device);
    } catch (err) {
      next(err);
    }
  }

  static async getUserDevices(req: Request, res: Response, next: NextFunction) {
    try {
      const devices = await DeviceService.getUserDevices(req.userId!);
      res.json(devices);
    } catch (err) {
      next(err);
    }
  }

  static async pairWithPlant(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id as string;
      const { plantId } = pairDeviceSchema.parse(req.body);
      const device = await DeviceService.pairWithPlant(req.userId!, id, plantId);
      res.json(device);
    } catch (err) {
      next(err);
    }
  }

  static async deleteDevice(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id as string;
      await DeviceService.deleteDevice(req.userId!, id);
      res.json({ message: 'Устройство удалено' });
    } catch (err) {
      next(err);
    }
  }
}
