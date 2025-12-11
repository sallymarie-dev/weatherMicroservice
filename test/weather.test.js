import { test, expect } from "vitest";
import request from "supertest";
import app from "../index.js";

test("weather route works", async () => {
  const res = await request(app).get("/weather/zip/date");
  expect(res.status).toBe(200);
});
