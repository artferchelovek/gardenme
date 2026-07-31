import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../config/prisma.js';
import { env } from '../config/env.js';

export interface RegisterDto {
  email: string;
  password: string;
  name?: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export class AuthService {
  static async register(dto: RegisterDto) {
    const existing = await prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
    });

    if (existing) {
      throw new Error('Пользователь с таким email уже существует');
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    const user = await prisma.user.create({
      data: {
        email: dto.email.toLowerCase(),
        passwordHash,
        name: dto.name ?? null,
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });

    const token = jwt.sign({ userId: user.id }, env.JWT_SECRET, { expiresIn: '30d' });

    return { user, token };
  }

  static async login(dto: LoginDto) {
    const user = await prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
    });

    if (!user) {
      throw new Error('Неверный email или пароль');
    }

    const isValid = await bcrypt.compare(dto.password, user.passwordHash);

    if (!isValid) {
      throw new Error('Неверный email или пароль');
    }

    const token = jwt.sign({ userId: user.id }, env.JWT_SECRET, { expiresIn: '30d' });

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        createdAt: user.createdAt,
      },
      token,
    };
  }

  static async getProfile(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        _count: {
          select: {
            plants: true,
            devices: true,
          },
        },
      },
    });

    if (!user) {
      throw new Error('Пользователь не найден');
    }

    return user;
  }
}
