import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get("/", (req, res) => {
  res.json({ status: true, msg: "Server is up and running!" });
});

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
