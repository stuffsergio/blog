import { AppError } from "../errors/AppError.js";
import {
  getAllInfo,
  getTagsByArticle,
  getArticleByTag,
  createRelationArticleTag,
  deleteRelationArticleTag,
} from "../services/articles_etiquetas.services.js";

export async function obtenerTodainfo(req, res, next) {
  try {
    const info = await getAllInfo();

    res.status(200).json(info);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function obtenerEtiquetasPorArticulo(req, res, next) {
  try {
    const articleId = req.params.articleId;

    const nombresEtiquetas = await getTagsByArticle(articleId);

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
    const tagId = req.params.tagId;

    const articulos = await getArticleByTag(tagId);

    if (articulos.length == 0)
      throw new AppError(
        "Esta etiqueta no está asociada a ningún artículo",
        404,
      );

    return res.status(200).json(articulos);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function crearRelacionArticuloEtiqueta(req, res, next) {
  try {
    const { articleId, tagId } = req.body;

    const relacionArticuloEtiqueta = await createRelationArticleTag({
      articleId,
      tagId,
    });

    res.status(200).json(relacionArticuloEtiqueta);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function eliminarRelacionArticuloTag(req, res, next) {
  try {
    const articleId = req.params.articleId;
    const tagId = req.params.tagId;

    const relacionEliminada = await deleteRelationArticleTag(articleId, tagId);

    res.status(200).json(relacionEliminada);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}
