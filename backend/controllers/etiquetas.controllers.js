import {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
  getTagByName,
} from "../services/etiquetas.services.js";

export async function obtenerTodasEtiquetas(req, res) {
  try {
    const etiquetas = await getAllTags();

    if (etiquetas.length == 0) {
      return res
        .status(404)
        .json({ message: "No se han encontrado etiquetas" });
    }

    return res.status(200).json(etiquetas);
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Error en el servidor / consulta", error: err });
  }
}

export async function obtenerEtiquetaPorId(req, res) {
  try {
    const id = req.params.id;

    const etiqueta = await getTagById(id);

    if (!etiqueta)
      return res
        .status(404)
        .json({ message: `No existe ninguna etiqueta con id - ${id}` });

    return res.status(200).json(etiqueta);
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Error en el servidor / consulta", error: err });
  }
}

export async function obtenerEtiquetaPorNombre(req, res) {
  try {
    const nombre = req.body;

    const etiqueta = await getTagByName(nombre);

    if (!etiqueta)
      return res
        .status(404)
        .json({ message: `No existe ninguna etiqueta con nombre - ${nombre}` });

    return res.status(200).json(etiqueta);
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Error en el servidor / consulta", error: err });
  }
}

export async function crearEtiqueta(req, res) {
  try {
    const { nombre } = req.body;

    const etiquetaEncontrada = await getTagByName({ nombre });

    if (etiquetaEncontrada) {
      return res
        .status(404)
        .json({ message: "Ya existe una etiqueta con ese nombre" });
    }

    const etiqueta = await createTag({ nombre });

    return res.status(200).json(etiqueta);
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Error en el servidor / consulta", error: err });
  }
}

export async function actualizarEtiqueta(req, res) {
  try {
    const id = req.params.id;

    const etiquetaEncontrada = await getTagById(id);

    if (!etiquetaEncontrada) {
      return res
        .status(404)
        .json({ message: "No existe una etiqueta con ese id" });
    }

    const etiqueta = await updateTag(id, { nombre });

    return res.status(200).json(etiqueta);
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Error en el servidor / consulta", error: err });
  }
}

export async function eliminarEtiqueta(req, res) {
  try {
    const id = req.params.id;

    const etiquetaEncontrada = await getTagById(id);

    if (!etiquetaEncontrada) {
      return res
        .status(404)
        .json({ message: "No existe una etiqueta con ese id" });
    }

    const etiqueta = await deleteTag(id);

    return res.status(200).json(etiqueta);
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Error en el servidor / consulta", error: err });
  }
}
