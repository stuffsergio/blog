import express from "express";
import {
  obtenerTodosBlogs,
  obtenerBlogPorId,
  obtenerBlogPorTitulo,
  crearBlog,
  actualizarBlog,
  actualizarBlogPorTitulo,
  actualizarBlogPorSubtitulo,
  actualizarBlogPorCuerpo,
  actualizarBlogPorResumen,
  actualizarBlogPorImagen,
  actualizarBlogPorEstado,
  eliminarBlog,
} from "../controllers/articles.controllers.js";

const router = express.Router();

// get
router.get("/todos", obtenerTodosBlogs);
router.get("/:id", obtenerBlogPorId);
router.get("/titulo", obtenerBlogPorTitulo);

// post
router.post("/", crearBlog);

// update
router.put("/:id", actualizarBlog);
router.put("/titulo/:id", actualizarBlogPorTitulo);
router.put("/subtitulo/:id", actualizarBlogPorSubtitulo);
router.put("/cuerpo/:id", actualizarBlogPorCuerpo);
router.put("/resumen/:id", actualizarBlogPorResumen);
router.put("/imagen/:id", actualizarBlogPorImagen);
router.put("/estado/:id", actualizarBlogPorEstado);

// delete
router.delete("/:id", eliminarBlog);

export default router;
