import { WinstonModuleOptions } from 'nest-winston';
import * as winston from 'winston';
import * as path from 'path';

export const winstonLoggerConfig: WinstonModuleOptions = {
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    new winston.transports.File({
      filename: path.join(__dirname, '../../logs/userip.log'),
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }),
  ],
};
