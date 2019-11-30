// REST Handlers

import express, { Request, Response } from "express";

import bodyParser from "body-parser";
import { Square, Shape } from "./shapes";

// Construct Web application
const app: express.Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable("x-powered-by");

app.get("/tacos", (req: Request, res: Response) => {
  let shape: Shape;

  shape = new Square(40);
  return res.json(`Hello World! Shape: ${shape}`);
});

export default app;
