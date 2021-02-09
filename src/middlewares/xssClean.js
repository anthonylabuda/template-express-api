import xssClean from "xss-clean";

import settings from "../settings";

const initialize = (api) => {
  api.use(xssClean(settings.middlewares.xssClean.options));
};

export default {
  initialize,
};
