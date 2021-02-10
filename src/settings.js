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
  timezone: `America/Chicago`
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
    format: `dev`,
  },
  winston: {},
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
