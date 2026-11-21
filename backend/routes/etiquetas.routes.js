import express from "express";
import {
  actualizarEtiqueta,
  crearEtiqueta,
  eliminarEtiqueta,
  obtenerEtiquetaPorId,
  obtenerEtiquetaPorNombre,
  obtenerTodasEtiquetas,
} from "../controllers/etiquetas.controllers.js";

const router = express.Router();

// get
router.get("/", obtenerTodasEtiquetas);
router.get("/nombre", obtenerEtiquetaPorNombre);
router.get("/:id", obtenerEtiquetaPorId);

// post
router.post("/", crearEtiqueta);

// put
router.put("/:id", actualizarEtiqueta);

// delete
router.delete("/:id", eliminarEtiqueta);

export default router;
