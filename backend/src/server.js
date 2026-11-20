import "dotenv/config";
import { pool } from "../db/connection.js";
import app from "./app.js";

const PORT = process.env.PORT;

async function testConnection() {
  const [rows] = await pool.query("select 1 + 1 as result");

  console.log("1 + 1 = " + rows[0].result);
}

testConnection();

app.listen(PORT, () => {
  console.log("Servidor running on localhost:" + PORT);
});
