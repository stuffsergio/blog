export default function Form() {
  const submitForm = () => {};
  return (
    <>
      <form onSubmit={submitForm}>
        <div>
          <input type="text" name="titulo" id="titulo" />
        </div>
        <div>
          <input type="text" name="subtitulo" id="subtitulo" />
        </div>
        <div>
          <textarea name="cuerpo" id="cuerpo"></textarea>
        </div>
        <div>
          <input type="file" name="imagen" id="imagen" />
        </div>
        <div>
          <select name="estado" id="estado" defaultValue={"borrador"}>
            <option value="borrador">Borrador</option>
            <option value="revision">Revisión</option>
            <option value="publicado">Publicado</option>
            <option value="archivado">Archivado</option>
          </select>
        </div>
      </form>
    </>
  );
}
