import moment from "moment";
import tz from "moment-timezone";
import winston from "winston";
import winstonDailyRotateFile from "winston-daily-rotate-file";

const api = {
  version: {
    major: 1,
    minor: 0,
    patch: 0,
  },
};

const app = {
  baseUrl: process.env.APP_BASE_URL,
  environment: process.env.NODE_ENV || `development`,
};

const middlewares = {
  bodyParser: {
    urlencoded: {
      options: {
        extended: false,
      },
    },
  },
  compression: {
    options: {},
  },
  cors: {
    options: {},
  },
  helmet: {
    options: {},
  },
  hpp: {
    options: {},
  },
  morgan: {
    format: `[:method] :url :status :response-time ms`,
  },
  winston: {
    options: {
      format: winston.format.combine(
        winston.format.timestamp({ format: moment().tz(`America/Chicago`).format() }),
        winston.format.json()
      ),
      level: `info`,
      transports: [
        new winstonDailyRotateFile({
          datePattern: `YYYY-MM-DD`,
          filename: `logs/%DATE%.log`,
        }),
      ],
    },
  },
  xssClean: {
    options: {},
  },
};

const server = {
  port: process.env.SERVER_PORT,
};

export default {
  api,
  app,
  middlewares,
  server,
};
