import dotenv from "dotenv/config";
import express from "express";
import cors from "cors";
import articlesRoutes from "../routes/articles.routes.js";
import etiquetasRoutes from "../routes/etiquetas.routes.js";
import articulosEtiquetasRoutes from "../routes/articles_etiquetas.routes.js";
import { notFound } from "../middlewares/notFound.js";
import { errorHandler } from "../middlewares/error.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5173"],
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Todo correcto OK ✅" });
});

app.use("/api/articulos", articlesRoutes);
app.use("/api/etiquetas", etiquetasRoutes);
app.use("/api/art_eti", articulosEtiquetasRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
