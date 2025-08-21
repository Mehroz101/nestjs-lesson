import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { GetIpLogService } from './get-ip-log.service';

@Injectable()
export class GetIpLogMiddleware implements NestMiddleware {
  constructor(private readonly ipLogger: GetIpLogService) { }

  use(req: Request, res: Response, next: NextFunction) {

    const userIP = req.ip
    this.ipLogger.log(`User IP: ${userIP}`, 'GetIpLogMiddleware'); // 👈 write to file

    next();
  }
}
