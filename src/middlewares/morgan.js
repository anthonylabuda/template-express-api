import morgan from "morgan";

import logger from "./logger";

import settings from "../settings";

const initialize = (api) => {
  api.use(
    morgan(settings.middlewares.morgan.format, {
      stream: { write: (message) => logger.info({ message, source: `api` }) },
    })
  );
};

export default {
  initialize,
};
