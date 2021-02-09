import hpp from "hpp";

import settings from "../settings";

const initialize = (api) => {
  api.use(hpp(settings.middlewares.hpp.options));
};

export default {
  initialize,
};
