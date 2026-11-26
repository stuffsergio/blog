import { useState } from "react";

export default function Form() {
  const [estado, setEstado] = useState("borrador");
  const [nombreArchivo, setNombreArchivo] = useState("Seleccionar");
  const [form, setForm] = useState({
    titulo: "",
    subtitulo: "",
    cuerpo: "",
    imagen: "",
    estado: estado,
  });

  const handleChangeImage = (e: any) => {
    const archivo = e.target.files;

    setNombreArchivo(!archivo ? "Seleccionar" : archivo.name);
  };

  const submitForm = (e: any) => {
    e.preventDefault();

    return form;
  };
  return (
    <>
      <form
        onSubmit={submitForm}
        onChange={(e) => setForm(e.target.value)}
        className="grid grid-cols-2 gap-30 px-10"
      >
        <div className="grid grid-col-4 justify-baseline items-start gap-10 border">
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <label htmlFor="titulo" className="text-xl w-full">
              Título
            </label>
            <input
              type="text"
              name="titulo"
              id="titulo"
              value={form.titulo}
              className="w-full text-xl px-6 py-2 border-2 border-(--shade-500) focus:border-(--accent-color) focus:outline-none focus:ring-3 focus:ring-(--secondary-color) transition-all transform duration-150"
            />
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <label htmlFor="subtitulo" className="text-lg w-full">
              Subtítulo
            </label>
            <input
              type="text"
              name="subtitulo"
              id="subtitulo"
              value={form.subtitulo}
              className="w-full text-lg px-6 py-2 border-2 border-(--shade-500) focus:border-(--accent-color) focus:outline-none focus:ring-3 focus:ring-(--secondary-color) transition-all transform duration-150"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <label htmlFor="imagen">Archivo</label>
            <input
              type="file"
              name="imagen"
              id="imagen"
              value={form.imagen}
              onChange={handleChangeImage}
              className="hidden"
            />
            <span>{nombreArchivo}</span>
          </div>
          <div>
            <div>
              <select
                name="estado"
                id="estado"
                defaultValue={"borrador"}
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value="borrador">Borrador</option>
                <option value="revision">Revisión</option>
                <option value="publicado">Publicar</option>
                <option value="archivado">Archivar</option>
              </select>
            </div>
            {/* BOTÓN SUBMIT */}
            <button type="submit">
              {estado === "borrador" || estado === "revision"
                ? "Guardar"
                : estado === "publicado"
                  ? "Publicar"
                  : "Archivar"}
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <label htmlFor="cuerpo">Cuerpo</label>
          <textarea
            name="cuerpo"
            id="cuerpo"
            value={form.cuerpo}
            className="resize-none"
          ></textarea>
        </div>
      </form>
    </>
  );
}
