import express, { Request, Response } from "express";

import bodyParser from "body-parser";
//import logger from "morgan";

import { Square, Shape } from "./shapes";

const app = express();
// TODO: Figure out how to disable powered by header globally, instead of per app
app.disable("x-powered-by");
//app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  let shape: Shape;

  shape = new Square(40);
  return res.send(`Hello World! Shape: ${shape}`);
});

export default app;
