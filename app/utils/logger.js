import { createLogger, transports, format } from 'winston'
import { config } from '../config';

export const log = createLogger({
  transports: [
    new transports.Console({
      level: config.LOG_LEVEL,
      format: format.simple(),
    }),
  ],
  exitOnError: false,
});
