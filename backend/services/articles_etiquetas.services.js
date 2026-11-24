import { pool } from "../db/connection.js";

export async function getAllInfo() {
  const [rows] = await pool.query(`
      select * from articulo_etiqueta
    `);
  return rows;
}

export async function getTagsByArticle(articuloId) {
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

export async function getArticleByTag(etiquetaId) {
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

export async function createRelationArticleTag({ articleId, tagId }) {
  const [rows] = await pool.query(
    `
            insert into articulo_etiqueta (articulo_id, etiqueta_id) values (?, ?)
        `,
    [articleId, tagId],
  );

  return rows;
}

export async function deleteRelationArticleTag(articuloId, etiquetaId) {
  const [rows] = await pool.query(
    `
            delete from articulo_etiqueta where articulo_id = ? and etiqueta_id = ?
        `,
    [articuloId, etiquetaId],
  );

  return rows;
}
