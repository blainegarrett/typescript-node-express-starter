// Main Express App
import express, { Request, Response } from "express";
import compression from "compression";
//import cors, { CorsOptions } from "cors";
//import helmet from "helmet";
import logger from "morgan";

import api from "./app";

const app = express();
app.disable("x-powered-by");
app.use(logger("dev"));
app.use(compression());

// Mount Applications
app.use(api);

// Set up cors
//let corsOptions: CorsOptions = { origin: "*" }; // TODO: Configure based on settings

// Setup Generic Middleware
//app.use(cors(corsOptions));
//app.options("*", cors(corsOptions));
app.use(compression());
//app.use(helmet());

//console.log(logger);

app.get("/health", (req: Request, res: Response) => {
  return res.send("ok");
});

const port = process.env.PORT ? process.env.PORT : 9090;

const server = app
  .listen(port, () => {
    console.log(
      `>>  Ready on port ${port} with NODE_ENV: ${process.env.NODE_ENV}`
    );
  })
  .on("error", err => {
    console.error(err);
  });

export default server;
