import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from './shared/constants';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new UnauthorizedException('No token');

    const token = authHeader.replace('Bearer ', '');
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      (req as any).user = decoded;
      next();
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
