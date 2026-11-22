import {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
  getTagByName,
} from "../services/etiquetas.services.js";
import { AppError } from "../errors/AppError.js";

export async function obtenerTodasEtiquetas(req, res, next) {
  try {
    const etiquetas = await getAllTags();

    if (etiquetas.length == 0) {
      throw new AppError("No se han encontrado tarjetas", 404);
    }

    return res.status(200).json(etiquetas);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function obtenerEtiquetaPorId(req, res, next) {
  try {
    const id = req.params.id;

    const etiqueta = await getTagById(id);

    if (!etiqueta)
      throw new AppError(`No existe ninguna etiqueta con id - ${id}`, 404);

    return res.status(200).json(etiqueta);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function obtenerEtiquetaPorNombre(req, res, next) {
  try {
    const nombre = req.body;

    const etiqueta = await getTagByName(nombre);

    if (!etiqueta)
      throw new AppError(
        `No existe ninguna etiqueta con nombre - ${nombre}`,
        404,
      );

    return res.status(200).json(etiqueta);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function crearEtiqueta(req, res, next) {
  try {
    const { nombre } = req.body;

    const etiquetaEncontrada = await getTagByName({ nombre });

    if (etiquetaEncontrada) {
      throw new AppError("Ya existe una etiqueta con ese nombre", 404);
    }

    const etiqueta = await createTag({ nombre });

    return res.status(200).json(etiqueta);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function actualizarEtiqueta(req, res, next) {
  try {
    const id = req.params.id;

    const etiquetaEncontrada = await getTagById(id);

    if (!etiquetaEncontrada)
      throw new AppError("No existe una etiqueta con ese id", 404);

    const etiqueta = await updateTag(id, { nombre });

    return res.status(200).json(etiqueta);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function eliminarEtiqueta(req, res, next) {
  try {
    const id = req.params.id;

    const etiquetaEncontrada = await getTagById(id);

    if (!etiquetaEncontrada)
      throw new AppError("No existe una etiqueta con ese id", 404);

    const etiqueta = await deleteTag(id);

    return res.status(200).json(etiqueta);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}
