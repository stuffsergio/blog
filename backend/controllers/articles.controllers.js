import {
  getAllBlogs,
  getBlogById,
  getBlogByTitle,
  createBlog,
  updateBlog,
  updateTitle,
  updateSubtitle,
  updateBody,
  updateResume,
  updateImage,
  updateStatus,
  deleteBlog,
} from "../services/articles.services.js";
import { AppError } from "../errors/AppError.js";

export async function obtenerTodosBlogs(req, res, next) {
  try {
    const blogs = await getAllBlogs();

    if (blogs.length == 0) throw new AppError("No se encuentra artículos", 404);

    return res.status(200).json(blogs);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function obtenerBlogPorId(req, res, next) {
  try {
    const id = req.params.id;

    const blog = await getBlogById(id);

    if (blog.length == 0)
      throw new AppError(`No se encuentra el blog con id - ${id}`, 404);

    return res.status(200).json(blog);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function obtenerBlogPorTitulo(req, res, next) {
  try {
    const { tituloParcialOEntero } = req.body;

    const blog = await getBlogByTitle(tituloParcialOEntero);

    if (blog.length == 0)
      throw new AppError(
        `No se encuentra el blog con el título - ${tituloParcialOEntero}`,
        404,
      );

    return res.status(200).json(blog);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function crearBlog(req, res, next) {
  try {
    const id = req.params.id;
    const { title, subtitle, body, resume, image, status } = req.body;

    const blogEncontrado = await getBlogById(id);

    if (blogEncontrado)
      throw new AppError("Ya existe un blog con esos datos", 404);

    const blog = await createBlog({
      title,
      subtitle,
      body,
      resume,
      image,
      status,
    });

    return res.status(200).json(blog);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function actualizarBlog(req, res, next) {
  try {
    const id = req.params.id;
    const { title, subtitle, body, resume, image, status } = req.body;

    const blogEncontrado = await getBlogById(id);

    if (blogEncontrado.length != 0)
      throw new AppError("No existe un blog con esos datos", 404);

    const blog = await updateBlog(id, {
      title,
      subtitle,
      body,
      resume,
      image,
      status,
    });

    return res.status(200).json(blog);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function actualizarBlogPorTitulo(req, res, next) {
  try {
    const id = req.params.id;
    const { title } = req.body;

    const blogEncontrado = await getBlogById(id);

    if (blogEncontrado.length != 0)
      throw new AppError("No existe un blog con ese titulo", 404);

    const blog = await updateTitle(id, { title });

    return res.status(200).json(blog);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function actualizarBlogPorSubtitulo(req, res, next) {
  try {
    const id = req.params.id;
    const { subtitle } = req.body;

    const blogEncontrado = await getBlogById(id);

    if (blogEncontrado.length != 0)
      throw new AppError("No existe un blog con ese subtitutlo", 404);

    const blog = await updateSubtitle(id, { subtitle });

    return res.status(200).json(blog);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function actualizarBlogPorCuerpo(req, res, next) {
  try {
    const id = req.params.id;
    const { body } = req.body;

    const blogEncontrado = await getBlogById(id);

    if (blogEncontrado.length != 0)
      throw new AppError("No existe un blog con ese body", 404);

    const blog = await updateBody(id, { body });

    return res.status(200).json(blog);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function actualizarBlogPorResumen(req, res, next) {
  try {
    const id = req.params.id;
    const { resume } = req.body;

    const blogEncontrado = await getBlogById(id);

    if (blogEncontrado.length != 0)
      throw new AppError("No existe un blog con ese resumen", 404);

    const blog = await updateResume(id, { resume });

    return res.status(200).json(blog);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function actualizarBlogPorImagen(req, res, next) {
  try {
    const id = req.params.id;
    const { image } = req.body;

    const blogEncontrado = await getBlogById(id);

    if (blogEncontrado.length != 0)
      throw new AppError("No existe un blog con esa imagen", 404);

    const blog = await updateImage(id, { image });

    return res.status(200).json(blog);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function actualizarBlogPorEstado(req, res, next) {
  try {
    const id = req.params.id;
    const { status } = req.body;

    const blogEncontrado = await getBlogById(id);

    if (blogEncontrado.length != 0)
      throw new AppError("No existe un blog con ese estado", 404);

    const blog = await updateStatus(id, { status });

    return res.status(200).json(blog);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}

export async function eliminarBlog(req, res, next) {
  try {
    const id = req.params.id;

    const blogEncontrado = await getBlogById(id);

    if (blogEncontrado == 0)
      throw new AppError(`No existe un blog con ese id - ${id}`, 404);

    const blog = await deleteBlog(id);

    return res.status(200).json(blog);
  } catch (err) {
    console.log({ error: err });
    next(err);
  }
}
