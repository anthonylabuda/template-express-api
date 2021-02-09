import httpStatus from "http-status";

import settings from "../../settings";

const status = (request, response, next) => {
  try {
    let Status = {
      Api: {
        status: `Online`,
        version: `${settings.api.version.major}.${settings.api.version.minor}.${settings.api.version.patch}`,
      }
    };

    response.status(httpStatus.OK);
    response.send({ Status });
  } catch (error) {
    next(error);
  }
};

export default {
  status,
};
