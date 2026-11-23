import { AppError } from "../errors/AppError.js";
import {
  getTagsByBlog,
  getBlogsByTag,
  createRelationBlogTag,
  deleteRelationBlogTag,
} from "../services/articles_etiquetas.services.js";

export async function obtenerEtiquetasPorBlog(req, res, next) {
  try {
    const blogId = req.params.id;

    const nombresEtiquetas = await getTagsByBlog(blogId);

    if (nombresEtiquetas.length == 0)
      throw new AppError("Este artículo no tiene etiquetas asignadas", 404);

    return res.status(200).json(nombresEtiquetas);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function obtenerBlogsPorEtiqueta(req, res, next) {
  try {
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function crearRelacionBlogEtiqueta(req, res, next) {
  try {
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function eliminarRelacionBlogTag(req, res, next) {
  try {
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}
