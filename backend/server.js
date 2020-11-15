import express from "express";
import { calc } from "./calculate.js";

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.end(calc(req.query).toString());
});

app.get("/", (req, res) => {
  res.send("API is running....");
});

const PORT = 5050;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
