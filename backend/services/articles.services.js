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

  return rows[0];
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
  image,
  status,
}) {
  const [rows] = await pool.query(
    `
      insert into articulo (titulo, subtitulo, cuerpo, resumen, imagen, estado)
      values (?, ?, ?, ?, ?, ?)
    `,
    [title, subtitle, body, resume, image, status],
  );

  return rows;
}

// ACTUALIZAR DATOS
export async function updateBlog(
  id,
  { title, subtitle, body, resume, image, status },
) {
  const [rows] = await pool.query(
    `
      update articulo
      set titulo = ?, subtitulo = ?, cuerpo = ?, resumen = ?, imagen = ?, estado = ?
      where id = ?
    `,
    [title, subtitle, body, resume, image, status, id],
  );

  return rows;
}

export async function updateTitle(id, { title }) {
  const [rows] = pool.query(
    `
      update articulo
      set titulo = ?
      where id = ?
    `,
    [title, id],
  );

  return rows;
}

export async function updateSubtitle(id, { subtitle }) {
  const [rows] = pool.query(
    `
      update articulo
      set subtitulo = ?
      where id = ?
    `,
    [subtitle, id],
  );

  return rows;
}

export async function updateBody(id, { body }) {
  const [rows] = pool.query(
    `
      update articulo
      set cuerpo = ?
      where id = ?
    `,
    [body, id],
  );

  return rows;
}

export async function updateResume(id, { resume }) {
  const [rows] = pool.query(
    `
      update articulo
      set resumen = ?
      where id = ?
    `,
    [resume, id],
  );

  return rows;
}

export async function updateImage(id, { image }) {
  const [rows] = pool.query(
    `
      update articulo
      set imagen = ?
      where id = ?
    `,
    [image, id],
  );

  return rows;
}

export async function updateStatus(id, { status }) {
  const [rows] = pool.query(
    `
      update articulo
      set estado = ?
      where id = ?
    `,
    [status, id],
  );

  return rows;
}

// ELIMINAR DATOS
export async function deleteBlog(id) {
  const [rows] = await pool.query(
    `
      delete from articulo where id = ?
    `,
    [id],
  );

  return rows;
}
