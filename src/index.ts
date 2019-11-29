// Simple Wrapper to import and run our server
// This file primarly exists so supertest doesn't listen() each time we attempt to test a handler

import server from "./server";
const port = process.env.PORT ? process.env.PORT : 9090;

server
  .listen(port, () => {
    console.log(
      `>>  Ready on port ${port} with NODE_ENV: ${process.env.NODE_ENV}`
    );
  })
  .on("error", err => {
    console.error(err);
  });
