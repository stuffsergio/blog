import { pool } from "../db/connection.js";

export async function getTagsByBlog(articuloId) {
  const [rows] = await pool.query(
    `
            select e.nombre
            from etiquetas e
            inner join articulo_etiqueta ae on e.id = ae.etiqueta_id
            where ae.articulo_id = ?
        `,
    [articuloId],
  );

  return rows;
}

export async function getBlogsByTag(etiquetaId) {
  const [rows] = await pool.query(
    `
            select a.titulo, a.subtitulo, a.cuerpo, a.resumen, a.imagen, a.estado
            from articulo a
            inner join articulo_etiqueta ae on a.id = ae.articulo_id
            where ae.etiqueta_id = ?
        `,
    [etiquetaId],
  );

  return rows;
}

export async function createRelationBlogTag(articuloId, etiquetaId) {
  const [rows] = await pool.query(
    `
            insert into articulo_etiqueta (articulo_id, etiqueta_id) values (?, ?)
        `,
    [articuloId, etiquetaId],
  );

  return rows;
}

export async function deleteRelationBlogTag(articuloId, etiquetaId) {
  const [rows] = await pool.query(
    `
            delete from articulo_etiqueta where articulo_id = ? and etiqueta_id = ?
        `,
    [articuloId, etiquetaId],
  );

  return rows;
}
