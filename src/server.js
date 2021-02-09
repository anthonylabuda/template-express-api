import http from "http";

import api from "./api";
import settings from "./settings";

const handleExit = () => {
  console.log(`[SERVER] :: Shutting down server...`);
  console.log(`[SERVER] :: Goodbye...`);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const handleInterrupt = () => {
  console.log(`[SERVER] :: Received interruption request`);

  handleExit();
};

const handleListen = () => {
  console.log(`[SERVER] :: Listening on port: ${settings.server.port}`);
};

const handleUncaughtException = (error) => {
  console.error(`[ERROR] :: An uncaught server exception occurred`);
  console.error(`[ERROR] :: ${error}`);

  handleExit();
};

const handleUnhandledRejection = () => {
  console.error(`[ERROR] :: An unhandled server rejection occurred`);
  console.error(`[ERROR] :: ${error}`);

  handleExit();
};

const server = http.createServer(api);

server.listen(settings.server.port, handleListen());

process.on(`SIGINT`, handleInterrupt);
process.on(`uncaughtException`, handleUncaughtException);
process.on(`unhandledRejection`, handleUnhandledRejection);
