# template-express-api

Template for a RESTful API built on Express.js

## Table of Contents

- [Directory Structure](#directory-structure)
- [Environment Variables](#environment-variables)
- [Packages](#packages)
  - [Dependencies](#dependencies)
  - [Development Dependencies](#development-dependencies)

## Directory Structure

For this project, the following directory structure is utilized:

```text
template-express-api
├── dist/
├── logs/
├── src/
│   ├── apis/
│   ├── middlewares/
│   ├── utilities/
│   ├── api.js
│   ├── middlewares.js
│   ├── routers.js
│   ├── server.js
│   └── settings.js
├── .babelrc
├── .editorconfig
├── .gitignore
├── .prettierrc
├── nodemon.json
├── package.json
└── README.md
```

## Environment Variables

For this project, environment variables are injected into the application through the use via `nodemon.json`.

For this project, the following environment variables are utilized:

| Environment Variable | Description                          |
| -------------------- | ------------------------------------ |
| APP_BASE_URL         | Base URL for the application         |
| NODE_ENV             | Node environment for the application |
| SERVER_PORT          | Port for the server to listen on     |

## Packages

For this project, the following packages are utilized:

### Dependencies

| Package                   | Description                                                                                  | URL                                                     |
| ------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| body-parser               | Node.js middleware for body parsing                                                          | https://www.npmjs.com/package/body-parser               |
| compression               | Node.js middleware for compression                                                           | https://www.npmjs.com/package/compression               |
| cors                      | Node.js middleware for CORS                                                                  | https://www.npmjs.com/package/cors                      |
| express                   | Fast, unopinionated, minimalist web framework for Node.js                                    | https://www.npmjs.com/package/express                   |
| helmet                    | Help secure Express apps with various HTTP headers                                           | https://www.npmjs.com/package/helmet                    |
| hpp                       | Express middleware to protect against HTTP Parameter Pollution attacks                       | https://www.npmjs.com/package/hpp                       |
| http-status               | Utility to interact with HTTP status codes                                                   | https://www.npmjs.com/package/http-status               |
| moment                    | JavaScript date library for parsing, validating, manipulating, and formatting dates          | https://www.npmjs.com/package/moment                    |
| moment-timezone           | Add-on for Moment.js to support time zones                                                   | https://www.npmjs.com/package/moment-timezone           |
| morgan                    | Node.js middleware for HTTP request logger                                                   | https://www.npmjs.com/package/morgan                    |
| winstom                   | Node.js middleware for logging                                                               | https://www.npmjs.com/package/winston                   |
| winston-daily-rotate-file | Transport for Winston which logs to a rotating file                                          | https://www.npmjs.com/package/winston-daily-rotate-file |
| xss-clean                 | Node.js middleware to sanitize user input coming from POST body, GET queries, and url params | https://www.npmjs.com/package/xss-clean                 |

### Development Dependencies

| Package                         | Description                                                          | URL                                                           |
| ------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------- |
| @babel/cli                      | Babel command line                                                   | https://www.npmjs.com/package/@babel/cli                      |
| @babel/core                     | Babel compiler core                                                  | https://www.npmjs.com/package/@babel/core                     |
| @babel/node                     | Babel command line for Node.js                                       | https://www.npmjs.com/package/@babel/node                     |
| @babel/plugin-transform-runtime | Babel plugin that enables the re-use of Babel's injected helper code | https://www.npmjs.com/package/@babel/plugin-transform-runtime |
| @babel/preset-env               | Babel preset that enables the use of the latest JavaScript           | https://www.npmjs.com/package/@babel/preset-env               |
| nodemon                         | Simple monitor script for use during development of a node.js app    | https://www.npmjs.com/package/nodemon                         |
