// Winston Logger Class
// https://www.loggly.com/ultimate-guide/node-logging-basics/
import winston from "winston";

/*
const logger = new winston.createLogger({
  transports: [
    new winston.transports.File({
      level:            'info',
      filename:         './logs/all-logs.log',
      handleExceptions: true,
      json:             true,
      maxsize:          5242880, //5MB
      maxFiles:         5,
      colorize:         false
    }),
    new winston.transports.Console({
      level:            'debug',
      handleExceptions: true,
      json:             false,
      colorize:         true
    })
  ],
  exitOnError: false
})

logger.stream = {
  write: function(message, encoding){
    logger.info(message);
  }
};
app.use(require("morgan")("combined", { "stream": logger.stream }));
*/

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" })
  ]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}

export default logger;
