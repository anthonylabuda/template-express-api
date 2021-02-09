import express from "express";

import StatusController from "./StatusController";

const StatusRouter = express.Router();

StatusRouter.get(`/`, StatusController.status);

export default StatusRouter;
