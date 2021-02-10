import moment from "moment";
import tz from "moment-timezone";
import winston from "winston";
import winstonDailyRotateFile from "winston-daily-rotate-file";

import settings from "../settings";

const centralStandardTime = () => {
  return moment().tz(settings.app.timezone).format()
};

const logger = winston.createLogger({
  format: winston.format.combine(winston.format.timestamp({ format: centralStandardTime }), winston.format.json()),
  level: `info`,
  transports: [
    new winstonDailyRotateFile({
      datePattern: `YYYY-MM-DD`,
      filename: `logs/%DATE%.error.log`,
      level: `error`,
    }),
    new winstonDailyRotateFile({
      datePattern: `YYYY-MM-DD`,
      filename: `logs/%DATE%.combined.log`,
    }),
  ],
});

if (settings.app.environment !== `production`) {
  logger.add(new winston.transports.Console());
}

export default logger;
