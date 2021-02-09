import httpStatus from "http-status";

import ApiError from "../utilities/ApiError";

const handleNotFoundError = (request, response, next) => {
  next(new ApiError(httpStatus.NOT_FOUND));
};

const handleUnexpectedApiError = (error, request, response, next) => {
  console.error(`[ERROR] :: An unexpected API error occurred`);
  console.error(`[ERROR] :: handleApiError :: ${error}`);

  response.status(error.status || httpStatus.INTERNAL_SERVER_ERROR);
  response.send();
};

export default {
  handleNotFoundError,
  handleUnexpectedApiError,
};
