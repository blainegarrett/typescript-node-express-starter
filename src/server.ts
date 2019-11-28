import app from "./app";
import compression from "compression";

app.use(compression());
app.disable("x-powered-by");

const port = process.env.PORT ? process.env.PORT : 9090;

const server = app
  .listen(port, () => {
    console.log(
      `>  Ready on port ${port} with NODE_ENV: ${process.env.NODE_ENV}`
    );
  })
  .on("error", err => {
    console.error(err);
  });

export default server;
