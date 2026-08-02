import type { NextFunction, Request, Response } from "express";
import { z } from "zod";

import { AuthService } from "../services/auth.service.js";

const registerSchema = z.object({
  email: z.string().email("Некорректный email адрес"),
  password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
  name: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email("Некорректный email адрес"),
  password: z.string().min(1, "Пароль обязателен"),
});

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const data = registerSchema.parse(req.body);
      const result = await AuthService.register(data);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const data = loginSchema.parse(req.body);
      const result = await AuthService.login(data);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  static async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await AuthService.getProfile(req.userId!);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }
}
