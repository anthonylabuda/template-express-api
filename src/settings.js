const api = {
  version: {
    major: 1,
    minor: 0,
    patch: 0,
  },
};

const app = {
  baseUrl: process.env.APP_BASE_URL,
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
