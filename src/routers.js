import express from "express";

import StatusRouter from "./apis/status/StatusRouter";

const Router = express.Router();

Router.use(`/status`, StatusRouter);

export default Router;
