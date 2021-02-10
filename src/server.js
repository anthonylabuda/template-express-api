import http from "http";

import api from "./api";
import settings from "./settings";

import logger from "./middlewares/logger";

const handleExit = () => {
  logger.info({ message: `Shutting down server`, source: `server` });
  logger.info({ message: `Goodbye`, source: `server` });

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const handleInterrupt = () => {
  logger.info({ message: `Received interruption request`, source: `server` });

  handleExit();
};

const handleListen = () => {
  logger.info({ message: `Listening on port ${settings.server.port}`, source: `server` });
};

const handleUncaughtException = () => {
  logger.error({ message: `An uncaught server exception occurred`, source: `server` });

  handleExit();
};

const handleUnhandledRejection = () => {
  logger.error({ message: `An unhandled server rejection occurred`, source: `server` });

  handleExit();
};

const server = http.createServer(api);

server.listen(settings.server.port, handleListen());

process.on(`SIGINT`, handleInterrupt);
process.on(`uncaughtException`, handleUncaughtException);
process.on(`unhandledRejection`, handleUnhandledRejection);
