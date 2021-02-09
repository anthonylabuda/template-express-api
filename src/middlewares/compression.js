import compression from "compression";

import settings from "../settings";

const initialize = (api) => {
  api.use(compression(settings.middlewares.compression.options));
};

export default {
  initialize,
};
