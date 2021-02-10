import httpStatus from "http-status";

import logger from "./logger";

import ApiError from "../utilities/ApiError";

const handleNotFoundError = (request, response, next) => {
  next(new ApiError(httpStatus.NOT_FOUND));
};

const handleUnexpectedApiError = (error, request, response, next) => {
  logger.error({ message: `An unexpected API error occurred`, source: `api`, error });

  response.status(error.status || httpStatus.INTERNAL_SERVER_ERROR);
  response.send();
};

export default {
  handleNotFoundError,
  handleUnexpectedApiError,
};
