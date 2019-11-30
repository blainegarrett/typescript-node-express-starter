import express, { Request, Response } from "express";

import { Square, Shape } from "./shapes";
import restApp from "./rest";
import webApp from "./web";

// Construct Root Express Application
const app = express();
app.use(restApp);
app.use(webApp);
app.disable("x-powered-by");

app.get("/", (req: Request, res: Response) => {
  let shape: Shape;

  shape = new Square(40);
  return res.send(`Hello World! Shape: ${shape}`);
});

export default app;
