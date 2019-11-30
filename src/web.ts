// Web Handlers

import express, { Request, Response } from "express";

// Construct Web application
const webApp: express.Application = express();
webApp.disable("x-powered-by");

webApp.get("/tacos2", (req: Request, res: Response) => {
  return res.send(`<h2>xxx${req.context}</h2>`);
  //return res.send(`<h2>Hello <i>World!</i></h2>`);
});

export default webApp;
