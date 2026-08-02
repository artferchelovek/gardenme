import type { NextFunction, Request, Response } from "express";

export function deviceAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const token =
    (req.headers["x-device-token"] as string) ||
    req.headers.authorization?.replace("Bearer ", "") ||
    req.body?.token;

  if (!token) {
    res.status(401).json({ error: "Заголовок X-Device-Token отсутствует" });
    return;
  }

  req.deviceToken = token;
  next();
}
