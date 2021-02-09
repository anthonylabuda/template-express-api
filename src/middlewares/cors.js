import cors from "cors";

import settings from "../settings";

const initialize = (api) => {
  api.use(cors(settings.middlewares.cors.options));
};

export default {
  initialize,
};
