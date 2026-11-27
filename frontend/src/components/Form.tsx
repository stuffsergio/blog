import { useState, useEffect } from "react";
import { Trash, ImageUp } from "../assets/svg/Icons";

export default function Form() {
  const initialForm = {
    titulo: "",
    subtitulo: "",
    cuerpo: "",
    imagen: null,
    estado: "borrador",
  };
  const [nombreArchivo, setNombreArchivo] = useState("Seleccionar");
  const [preview, setPreview] = useState<string | null>(null);
  const [form, setForm] = useState(initialForm);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeImage = (e: any) => {
    const archivo = e.target.files?.[0];

    if (!archivo) return;
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    const url = URL.createObjectURL(archivo);
    setPreview(url);
    setForm((prev) => ({ ...prev, imagen: archivo }));
    setNombreArchivo(!archivo ? "Seleccionar" : archivo.name);
    console.log("Archivo: ", archivo);
    console.log("Preview: ", preview);
  };

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleDeleteImage = () => {
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
    setNombreArchivo("Seleccionar");
    setForm((prev) => ({ ...prev, imagen: null }));
  };

  const submitForm = (e: any) => {
    e.preventDefault();

    console.log("Submitting...");

    return form;
  };

  const isPreparado =
    form.titulo === "" || form.subtitulo === "" || form.cuerpo === "";

  return (
    <>
      <form
        onSubmit={submitForm}
        className="grid grid-cols-2 gap-30 px-10 bg-(--shade-800)"
      >
        {/* PRIMERA PARTE - IZQ */}
        <div className="grid grid-col-4 justify-baseline items-start gap-10 p-10 text-(--gray-300)">
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <label htmlFor="titulo" className="text-xl w-full">
              Título
            </label>
            <input
              type="text"
              name="titulo"
              id="titulo"
              value={form.titulo}
              onChange={handleChange}
              className="w-full text-xl px-6 py-2 rounded-xl border-2 border-(--shade-500) focus:border-(--accent-color)/80 focus:outline-none focus:ring-4 focus:ring-(--secondary-color) transition-all transform duration-150"
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
              onChange={handleChange}
              className="w-full text-lg px-6 py-2 rounded-xl border-2 border-(--shade-500) focus:border-(--accent-color)/80 focus:outline-none focus:ring-4 focus:ring-(--secondary-color) transition-all transform duration-150"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <label
              htmlFor="imagen"
              className="min-w-full min-h-full flex flex-col justify-center items-center border-2 border-dotted border-(--shade-500) rounded-3xl"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="preview imagen seleccionada"
                  width={300}
                  className="py-16"
                />
              ) : (
                <ImageUp className="my-16" />
              )}
            </label>
            <input
              type="file"
              name="imagen"
              id="imagen"
              onChange={handleChangeImage}
              className="hidden"
            />
            <div className="w-full flex flex-row justify-between items-center px-6 py-2">
              <span>{nombreArchivo}</span>
              {preview ? (
                <button
                  type="button"
                  onClick={handleDeleteImage}
                  className="rounded-full p-1 bg-(--gray-300) text-(--shade-800)/70"
                >
                  <Trash size={16} />
                </button>
              ) : null}
            </div>
          </div>
          <div>
            <select
              name="estado"
              id="estado"
              value={form.estado}
              onChange={handleChange}
            >
              <option value="borrador">Borrador</option>
              <option value="revision">Revisión</option>
              <option value="publicado">Publicar</option>
              <option value="archivado">Archivar</option>
            </select>
          </div>
          {/* BOTÓN SUBMIT */}
          <div className="w-full">
            <button
              type="submit"
              disabled={isPreparado}
              className="
                w-full text-2xl font-bold px-8 py-2 border-2 border-(--shade-500)
                disabled:cursor-not-allowed disabled:opacity-40"
            >
              {form.estado === "borrador" || form.estado === "revision"
                ? "Guardar"
                : form.estado === "publicado"
                  ? "Publicar"
                  : "Archivar"}
            </button>
          </div>
        </div>

        {/* SEGUNDA PARTE - DCHA */}
        <div className="flex flex-col justify-start items-start gap-8 p-10 bg-(--gray-300) text-(--shade-800) rounded-[36px]">
          <label htmlFor="cuerpo" className="text-xl">
            Cuerpo
          </label>
          <textarea
            name="cuerpo"
            id="cuerpo"
            value={form.cuerpo}
            onChange={handleChange}
            className="resize-none size-full p-8 rounded-[22px] border-2 border-(--shade-500) focus:border-(--accent-color)/80 focus:outline-none focus:ring-4 focus:ring-(--secondary-color) transition-all transform duration-150"
          ></textarea>
        </div>
      </form>
    </>
  );
}
