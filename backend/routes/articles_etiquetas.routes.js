import {
  obtenerEtiquetasPorArticulo,
  obtenerArticuloPorEtiqueta,
  crearRelacionArticuloEtiqueta,
  eliminarRelacionArticuloTag,
  obtenerTodainfo,
} from "../controllers/articles_etiquetas.controllers.js";
import express from "express";

const router = express.Router();

// get
router.get("/", obtenerTodainfo);
router.get("/etiquetas/:articleId", obtenerEtiquetasPorArticulo);
router.get("/articulos/:tagId", obtenerArticuloPorEtiqueta);

// post
router.post("/", crearRelacionArticuloEtiqueta);

// delete
router.delete("/:articleId/:tagId", eliminarRelacionArticuloTag);

export default router;
