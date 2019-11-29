// Main Express App
import express, { Request, Response } from "express";
import compression from "compression";
import cors, { CorsOptions } from "cors";
//import helmet from "helmet";
import logger from "morgan";

import api from "./app";

let corsOptions: CorsOptions = {
  methods: ["GET"],
  optionsSuccessStatus: 200,
  origin: "*"
}; // TODO: Configure based on settings

const app = express();
app.disable("x-powered-by");
app.use(logger("dev"));
app.use(compression());
app.use(cors(corsOptions));

// Mount Applications
app.use(api);

// Set up cors

// Setup Generic Middleware
app.use(cors(corsOptions));
//app.options("*", cors(corsOptions));
//app.use(compression());
//app.use(helmet());

//console.log(logger);

app.get("/health", (req: Request, res: Response) => {
  // Add health checks
  return res.send("ok");
});

app.get("/version", (req: Request, res: Response) => {
  // Version Handler
  return res.send("ok");
});

export default app;
