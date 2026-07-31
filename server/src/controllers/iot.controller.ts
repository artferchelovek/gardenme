import type { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { ReadingService } from '../services/reading.service.js';

const readingSchema = z.object({
  moisture: z.number().min(0).max(100),
  battery: z.number().min(0).max(100),
});

export class IotController {
  static async postReading(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = readingSchema.parse(req.body);
      const result = await ReadingService.ingestReading(req.deviceToken!, dto);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}
