import bodyParser from "./middlewares/bodyParser";
import compression from "./middlewares/compression";
import cors from "./middlewares/cors";
import helmet from "./middlewares/helmet";
import hpp from "./middlewares/hpp";
import morgan from "./middlewares/morgan";
import xssClean from "./middlewares/xssClean";

const initialize = (api) => {
  bodyParser.initialize(api);
  compression.initialize(api);
  cors.initialize(api);
  helmet.initialize(api);
  hpp.initialize(api);
  morgan.initialize(api);
  xssClean.initialize(api);
};

export default {
  initialize,
};
