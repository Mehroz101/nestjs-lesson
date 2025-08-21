import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class RequestTimerMiddleware implements NestMiddleware {

  private readonly logger = new Logger('RequestTimerMiddleware');

  use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();

    req.on('end', () => {
      const end = Date.now();
      const duration = end - start;

      this.logger.log(`Request ${req.method} ${req.originalUrl} took ${duration}ms`, 'RequestTimerMiddleware');
    })
    next();
  }
}
