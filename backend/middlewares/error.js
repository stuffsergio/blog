export async function errorHandler(err, req, res, next) {
  console.error(err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Error en el servidor / consulta";

  res.status(statusCode).json({ error: message });
}
