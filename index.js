import express from "express";
import fs from "fs";
import { PORT } from "./config.js";

const app = express();

app.get("/health", (req, res) => {
  const version = JSON.parse(fs.readFileSync("package.json"))["version"];

  res.json({ status: true, msg: "Server is up and running!", version });
});

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
