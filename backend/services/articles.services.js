import { pool } from "../db/connection.js";

// LEER DATOS
export async function getAllBlogs() {
  const [rows] = await pool.query(`
            select * from articulo
        `);

  return rows;
}

export async function getBlogById(id) {
  const [rows] = await pool.query(
    `
            select * from articulo where id = ?
        `,
    [id],
  );

  return rows;
}

export async function getBlogByTitle({ title }) {
  const titleFiltrado = `%${title}%`;
  const [rows] = await pool.query(
    `
            select * from articulo where title like %?%
        `,
    [titleFiltrado],
  );

  return rows;
}

// CREAR DATOS
export async function createBlog({
  title,
  subtitle,
  body,
  resume,
  imagen,
  estado,
}) {}

// ACTUALIZAR DATOS
export async function updateBlog(
  id,
  { title, subtitle, body, resume, imagen, estado },
) {}

export async function updateTitle(id, { title }) {}

export async function updateTitle(id, { subtitle }) {}

export async function updateBody(id, { body }) {}

export async function updateResume(id, { resume }) {}

export async function updateImage(id, { image }) {}

export async function updateStatus(id, { status }) {}

// ELIMINAR DATOS
export async function deleteBlog(id) {}
