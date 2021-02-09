import express from "express";

import middlewares from "./middlewares";
import routers from "./routers";

import errors from "./middlewares/errors";

const api = express();

middlewares.initialize(api);

api.use(`/api`, routers);

api.use(errors.handleNotFoundError);
api.use(errors.handleUnexpectedApiError);

export default api;
