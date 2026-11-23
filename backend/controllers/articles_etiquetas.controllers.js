import { AppError } from "../errors/AppError.js";
import {
  getTagsByArticle,
  getArticleByTag,
  createRelationArticleTag,
  deleteRelationArticleTag,
} from "../services/articles_etiquetas.services.js";

export async function obtenerEtiquetasPorArticulo(req, res, next) {
  try {
    const articleId = req.params.id;

    const nombresEtiquetas = await getTagsByArticle(articleId);
    console.log(nombresEtiquetas);

    if (nombresEtiquetas.length == 0)
      throw new AppError("Este artículo no tiene etiquetas asignadas", 404);

    return res.status(200).json(nombresEtiquetas);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function obtenerArticuloPorEtiqueta(req, res, next) {
  try {
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function crearRelacionArticuloEtiqueta(req, res, next) {
  try {
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function eliminarRelacionArticuloTag(req, res, next) {
  try {
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}
