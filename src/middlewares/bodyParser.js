import bodyParser from "body-parser";

import settings from "../settings";

const initialize = (api) => {
  api.use(bodyParser.json());
  api.use(bodyParser.urlencoded(settings.middlewares.bodyParser.urlencoded.options));
};

export default {
  initialize,
};
