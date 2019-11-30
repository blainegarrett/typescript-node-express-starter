// Main Express App
import express from "express";
//import * as express from "express";
//import httpContext from "express-http-context";

import compression from "compression";
import cors, { CorsOptions } from "cors";
//import helmet from "helmet";
//import logger from "morgan";
import logger from "./logger";
//const lw = require("@google-cloud/logging-winston");
import api from "./app";

// interface IContext {
//   correlationId: string;
// }
//
// class ApplicationContext implements IContext {
//   constructor() {}
// }

interface IApplicationContext {}

class AuthContext implements IApplicationContext {}

class UserContext extends AuthContext {
  user_id?: string;
  user?: any;

  constructor(user_id: string) {
    super();
    this.user_id = user_id;
  }
}

class OrganizationContext extends UserContext {
  organization_id: string = "5";

  constructor(user_id: string, organization_id: string) {
    super(user_id);
    this.organization_id = organization_id;
  }

  toString(): string {
    return `OrganizationContext ~user: ${this.user_id}, organization_id: ${
      this.organization_id
    }~`;
  }
}

//Inline definitions...
declare global {
  namespace Express {
    interface Request {
      taco: number;
      ctx: IApplicationContext;
      context: IApplicationContext;
    }
  }
}

//import { Response } from "express-serve-static-core";
// import { response } from "express";
//
// // augment the `express-serve-static-core` module
// declare module "express-serve-static-core" {
//   // first, declare that we are adding a method to `Response` (the interface)
//   export interface Response {
//     respondWithData(data: any): this;
//     context: string;
//   }
// }

// now actually add it to `response` (the prototype)
// response.respondWithData = function(data: any) {
//   return this.json({ errors: null, data: data });
// };

let requestMiddleware = function(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.log("TOTALLY TACO TIME...");
  let ctx: AuthContext;

  ctx = new OrganizationContext("user_id", "organization_id");

  req.context = ctx;
  req.taco = 666;
  //let n: Network = "sdfsd";
  //req.taco = "612";
  //console.log((req.context = "cheese"));
  console.log(req.context);
  next();
};

let corsOptions: CorsOptions = {
  methods: ["GET"],
  optionsSuccessStatus: 200,
  origin: "*"
}; // TODO: Configure based on settings

// Create express instance
const app: express.Application = express();

// Use middleware
//app.use(httpContext.middleware);
app.disable("x-powered-by");
app.use(requestMiddleware);
//app.use(logger("dev"));
//app.use(logger);

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

// Define some standard
app.get("/health", (req: express.Request, res: express.Response) => {
  // Add health checks
  logger.error("warp nacelles offline");
  logger.info("shields at 99%");
  return res.send("ok");
});

app.get("/version", (req: express.Request, res: express.Response) => {
  //httpContext.set("xuser", "taco");
  //console.log();

  //console.log(httpContext.get("xuser"));

  // Version Handler
  //return res.send(httpContext.get("xuser"));
  return res.send(`xx${req.taco}`);
});

export default app;
