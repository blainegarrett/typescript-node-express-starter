// Winston Logger Class
// https://www.loggly.com/ultimate-guide/node-logging-basics/
//import expressWinton from "express-winston";
import winston from "winston";
const { LoggingWinston } = require("@google-cloud/logging-winston");

const loggingWinston = new LoggingWinston();
const SERVICE_NAME = "derpderpderp";
//console.log(process.env);

// For Options see: https://www.npmjs.com/package/express-winston
// const logger = expressWinton.logger({
//   baseMeta: { service: SERVICE_NAME },
//   transports: [
//     // Console
//     new winston.transports.Console({
//       //format: winston.format.simple(),
//       level: "info",
//       //format: winston.format.combine(),
//       format: winston.format.printf(info => {
//         console.log(info);
//         return `${new Date().toISOString()}, ${info.message} ${info.service}`;
//       })
//     }),
//     // Add Stackdriver Logging
//     loggingWinston
//   ]
// });

const logger = winston.createLogger({
  defaultMeta: { service: SERVICE_NAME },
  level: "info",
  transports: [
    // Console
    new winston.transports.Console({
      //format: winston.format.simple(),
      level: "info",
      //correlationId: "asdf",
      handleExceptions: true,

      //format: winston.format.combine(),
      format: winston.format.printf(info => {
        console.log(info);
        return `${new Date().toISOString()}, ${info.message} ${info.service}`;
      })
    }),
    // Add Stackdriver Logging
    loggingWinston
  ]
});

// Writes some log entries
logger.error("fiiiiiish");
logger.info("ifnoinfofnfonfo");
//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
// if (process.env.NODE_ENV !== "production") {
//   logger.add(
//     new winston.transports.Console({
//       format: winston.format.simple()
//     })
//   );
// }

export default logger;
