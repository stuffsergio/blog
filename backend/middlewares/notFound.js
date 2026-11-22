export async function notFound(req, res) {
  res.status(400).json({ error: "Ruta no encontrada, revisa url" });
}
