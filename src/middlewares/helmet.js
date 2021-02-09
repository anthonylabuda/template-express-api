import helmet from "helmet";

import settings from "../settings";

const initialize = (api) => {
  api.use(helmet(settings.middlewares.helmet.options));
};

export default {
  initialize,
};
