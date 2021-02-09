import morgan from "morgan";

import settings from "../settings";

const initialize = (api) => {
  api.use(morgan(settings.middlewares.morgan.format));
};

export default {
  initialize,
};
