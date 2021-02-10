import winston from "winston";

import settings from "../settings";

const logger = winston.createLogger(settings.middlewares.winston.options);

if (settings.app.environment !== `production`) {
  logger.add(new winston.transports.Console());
}

export default logger;
