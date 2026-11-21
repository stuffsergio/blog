import { pool } from "../db/connection.js";

export async function getAllTags() {
  const [rows] = await pool.query(`
            select * from etiquetas
        `);

  return rows;
}

export async function getTagById(id) {
  const [rows] = await pool.query(
    `
            select * from etiquetas where id = ?
        `,
    [id],
  );

  return rows[0];
}

export async function getTagByName({ nombre }) {
  const [rows] = await pool.query(
    `
            select * from etiquetas where nombre = ?
        `,
    [nombre],
  );

  return rows[0];
}

export async function createTag({ nombre }) {
  const [rows] = await pool.query(
    `
            insert into etiquetas (nombre) values (?)
        `,
    [nombre],
  );

  return rows;
}

export async function updateTag(id, { nombre }) {
  const [rows] = await pool.query(
    `
            update etiquetas set nombre = ? where id = ?
        `,
    [nombre, id],
  );

  return rows;
}

export async function deleteTag(id) {
  const [rows] = await pool.query(
    `
            delete from etiquetas where id = ?
        `,
    [id],
  );

  return rows[0];
}
