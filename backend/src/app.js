import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Todo correcto OK ✅" });
});

export default app;
