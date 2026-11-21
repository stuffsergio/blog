import dotenv from "dotenv/config";
import express from "express";
import cors from "cors";
import articlesRoutes from "../routes/articles.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Todo correcto OK ✅" });
});

app.use("/api/articulos", articlesRoutes);

export default app;
