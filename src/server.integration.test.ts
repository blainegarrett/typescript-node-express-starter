/* eslint-env jest */

// Integration Tests Around Server
import supertest from "supertest";
import app from "./server";

describe("The root express app", () => {
  test("GET request has expected results", async () => {
    const res: supertest.Response = await supertest(app)
      .get("/")
      .send();

    expect(res.status).toEqual(200);
    expect(res.text).toBe("Hello World! Shape: square");
    expect(res.header).not.toHaveProperty("x-powered-by");
    expect(res.header["access-control-allow-origin"]).toBe("*");
  });

  test("OPTIONS request has expected results", async () => {
    const res: supertest.Response = await supertest(app)
      .options("/")
      .send();

    // Check Results
    expect(res.status).toEqual(200); // Overidden in cors options
    expect(res.header).not.toHaveProperty("x-powered-by");
    expect(res.text).toBe("");
    expect(res.header["access-control-allow-origin"]).toBe("*");
    expect(res.header["access-control-allow-methods"]).toBe("GET");
  });

  test("Disallowed HTTP Method expected results", async () => {
    const res: supertest.Response = await supertest(app)
      .post("/") // Post isn't supported by our endpoint
      .send();

    // Check Results
    expect(res.status).toEqual(404); // TODO: Should be 405 METHOD NOT ALLOWED
    expect(res.header).not.toHaveProperty("x-powered-by");
    expect(res.header["access-control-allow-origin"]).toBe("*");
  });

  test("GET to non-existent route request has expected results", async () => {
    const res: supertest.Response = await supertest(app)
      .get("/does-not-exist")
      .send();

    // Check Results
    expect(res.status).toEqual(404); // Overidden in cors options
    expect(res.header).not.toHaveProperty("x-powered-by");
    expect(res.header["access-control-allow-origin"]).toBe("*");
  });
});
