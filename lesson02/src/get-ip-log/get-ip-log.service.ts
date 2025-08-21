import { Injectable, LoggerService as NestLoggerService } from '@nestjs/common';
import { createLogger, transports, format, Logger } from 'winston';
import * as path from 'path';
// Optional: filter to exclude internal NestJS logs (customize as needed)
const excludeContexts = ['NestFactory', 'InstanceLoader', 'RoutesResolver', 'RouterExplorer', 'NestApplication'];
const filterNestInternalLogs = format((info) => {
  if (info.context === 'string' && excludeContexts.includes(info.context)) {
    return false;
  }
  return info;
});

@Injectable()
export class GetIpLogService implements NestLoggerService {
  private readonly IPLogger: Logger;

  constructor() {
    this.IPLogger = createLogger({
      level: 'info',
      format: format.combine(
        filterNestInternalLogs(),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(({ timestamp, level, message, context }) => {
          return `[${timestamp}] [${level.toUpperCase()}] [${context}] ${message}`;
        }),
      ),
      transports: [
        new transports.Console(),
        new transports.File({ filename: path.join(__dirname, '../../logs/userip.log') }),
      ],
    });
  }

  log(message: string, context?: string) {
    this.IPLogger.info({ message, context });
  }

  error(message: string, trace?: string, context?: string) {
    this.IPLogger.error({ message, context, trace });
  }

  warn(message: string, context?: string) {
    this.IPLogger.warn({ message, context });
  }

  debug(message: string, context?: string) {
    this.IPLogger.debug({ message, context });
  }

  verbose(message: string, context?: string) {
    this.IPLogger.verbose({ message, context });
  }
}