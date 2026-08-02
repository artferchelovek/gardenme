import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { env } from "../config/env.js";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Непредоставлен токен авторизации" });
    return;
  }

  const parts = authHeader.split(" ");
  const token = parts[1];

  if (!token) {
    res.status(401).json({ error: "Непредоставлен токен авторизации" });
    return;
  }

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as unknown as {
      userId: string;
    };
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res
      .status(401)
      .json({ error: "Недействительный или истекший токен авторизации" });
    return;
  }
}
