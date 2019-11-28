import express, { Request, Response } from "express";
import { Square, Shape } from "./shapes";

const app = express();

app.get("/", (req: Request, res: Response) => {
  let shape: Shape;

  shape = new Square(40);
  return res.send(`Hello World! Shape: ${shape}`);
});

export default app;
