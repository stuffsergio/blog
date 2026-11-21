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

export async function obtenerTodosBlogs(req, res) {
  try {
    const blogs = await getAllBlogs();

    if (blogs.length == 0) {
      return res.status(404).json({ message: "No se encuentran blogs" });
    }

    return res.status(200).json(blogs);
  } catch (err) {
    return res
      .status(400)
      .json({ error: "Error en el servidor / consulta", error: err });
  }
}

export async function obtenerBlogPorId(req, res) {
  try {
    const id = req.params.id;

    const blog = await getBlogById(id);

    if (blog.length == 0) {
      return res
        .status(404)
        .json({ message: `No se encuentra el blog con id: ${id}` });
    }

    return res.status(200).json(blog);
  } catch (err) {
    return res
      .status(400)
      .json({ error: "Error en el servidor / consulta", error: err });
  }
}

export async function obtenerBlogPorTitulo(req, res) {
  try {
    const { tituloParcialOEntero } = req.body;

    const blog = await getBlogByTitle(tituloParcialOEntero);

    if (blog.length == 0) {
      return res.status(404).json({
        message: `No se encuentra el blog con el título: ${tituloParcialOEntero}`,
      });
    }

    return res.status(200).json(blog);
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Error en el servidor / consulta", error: err });
  }
}

export async function crearBlog(req, res) {
  try {
    const id = req.params.id;
    const { title, subtitle, body, resume, image, status } = req.body;

    const blogEncontrado = await getBlogById(id);

    if (blogEncontrado) {
      return res
        .status(404)
        .json({ message: "Ya existe un blog con esos datos" });
    }

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
    console.log("Error: ", err);
    return res
      .status(400)
      .json({ message: "Error en el servidor / consulta", error: err });
  }
}

export async function actualizarBlog(req, res) {
  try {
    const id = req.params.id;
    const { title, subtitle, body, resume, image, status } = req.body;

    const blogEncontrado = await getBlogById(id);

    if (blogEncontrado.length != 0) {
      return res
        .status(404)
        .json({ message: "No existe un blog con esos datos" });
    }

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
    return res
      .status(400)
      .json({ message: "Error en el servidor / consulta", error: err });
  }
}

export async function actualizarBlogPorTitulo(req, res) {
  try {
    const id = req.params.id;
    const { title } = req.body;

    const blogEncontrado = await getBlogById(id);

    if (blogEncontrado.length != 0) {
      return res
        .status(404)
        .json({ message: "No existe un blog con esos datos" });
    }

    const blog = await updateTitle(id, { title });

    return res.status(200).json(blog);
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Error en el servidor / consulta", error: err });
  }
}

export async function actualizarBlogPorSubtitulo(req, res) {
  try {
    const id = req.params.id;
    const { subtitle } = req.body;

    const blogEncontrado = await getBlogById(id);

    if (blogEncontrado.length != 0) {
      return res
        .status(404)
        .json({ message: "No existe un blog con esos datos" });
    }

    const blog = await updateSubtitle(id, { subtitle });

    return res.status(200).json(blog);
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Error en el servidor / consulta", error: err });
  }
}

export async function actualizarBlogPorCuerpo(req, res) {
  try {
    const id = req.params.id;
    const { body } = req.body;

    const blogEncontrado = await getBlogById(id);

    if (blogEncontrado.length != 0) {
      return res
        .status(404)
        .json({ message: "No existe un blog con esos datos" });
    }

    const blog = await updateBody(id, { body });

    return res.status(200).json(blog);
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Error en el servidor / consulta", error: err });
  }
}

export async function actualizarBlogPorResumen(req, res) {
  try {
    const id = req.params.id;
    const { resume } = req.body;

    const blogEncontrado = await getBlogById(id);

    if (blogEncontrado.length != 0) {
      return res
        .status(404)
        .json({ message: "No existe un blog con esos datos" });
    }

    const blog = await updateResume(id, { resume });

    return res.status(200).json(blog);
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Error en el servidor / consulta", error: err });
  }
}

export async function actualizarBlogPorImagen(req, res) {
  try {
    const id = req.params.id;
    const { image } = req.body;

    const blogEncontrado = await getBlogById(id);

    if (blogEncontrado.length != 0) {
      return res
        .status(404)
        .json({ message: "No existe un blog con esos datos" });
    }

    const blog = await updateImage(id, { image });

    return res.status(200).json(blog);
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Error en el servidor / consulta", error: err });
  }
}

export async function actualizarBlogPorEstado(req, res) {
  try {
    const id = req.params.id;
    const { status } = req.body;

    const blogEncontrado = await getBlogById(id);

    if (blogEncontrado.length != 0) {
      return res
        .status(404)
        .json({ message: "No existe un blog con esos datos" });
    }

    const blog = await updateStatus(id, { status });

    return res.status(200).json(blog);
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Error en el servidor / consulta", error: err });
  }
}

export async function eliminarBlog(req, res) {
  try {
    const id = req.params.id;

    const blogEncontrado = await getBlogById(id);

    if (blogEncontrado == 0) {
      return res
        .status(404)
        .json({ message: `No existe un blog con esos datos - id: ${id}` });
    }

    const blog = await deleteBlog(id);

    return res.status(200).json(blog);
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Error en el servidor / consulta", error: err });
  }
}
