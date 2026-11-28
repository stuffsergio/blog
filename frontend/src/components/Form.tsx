import { useState, useEffect } from "react";
import { Trash, ImageUp } from "../assets/svg/Icons";

export default function Form() {
  const initialForm = {
    titulo: "",
    subtitulo: "",
    cuerpo: "",
    resumen: "",
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
    form.titulo === "" ||
    form.subtitulo === "" ||
    form.cuerpo === "" ||
    form.resumen === "";

  return (
    <>
      <form onSubmit={submitForm} className="grid grid-cols-2 gap-30 px-10">
        {/* PRIMERA PARTE - IZQ */}
        <div className="grid grid-col-4 justify-baseline items-start gap-10 px-8 py-2">
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <label htmlFor="titulo" className="text-xl w-full">
              Título
            </label>
            <input
              type="text"
              name="titulo"
              id="titulo"
              maxLength={200}
              value={form.titulo}
              onChange={handleChange}
              className="w-full text-xl px-6 py-2 rounded-xl border border-(--gray-900) focus:border-(--accent-color)/80 focus:outline-none focus:ring-4 focus:ring-(--secondary-color) transition-all transform duration-150"
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
              maxLength={255}
              value={form.subtitulo}
              onChange={handleChange}
              className="w-full text-lg px-6 py-2 rounded-xl border border-(--gray-900) focus:border-(--accent-color)/80 focus:outline-none focus:ring-4 focus:ring-(--secondary-color) transition-all transform duration-150"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <label
              htmlFor="imagen"
              className="min-w-full min-h-full flex flex-col justify-center items-center border border-dotted border-(--gray-900) rounded-3xl"
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
            {/* <select
              name="estado"
              id="estado"
              value={form.estado}
              onChange={handleChange}
            >
              <option value="borrador">Borrador</option>
              <option value="revision">Revisión</option>
              <option value="publicado">Publicar</option>
              <option value="archivado">Archivar</option>
            </select> */}
            <ul className="relative grid grid-cols-4 place-items-center py-2 text-sm border border-(--gray-900) rounded-full">
              <li className="1fr active:font-bold">Borrador</li>
              <li className="1fr active:font-bold">Revisión</li>
              <li className="1fr active:font-bold">Publicar</li>
              <li className="1fr active:font-bold">Archivar</li>
              {/* elemento pill */}
              <li className="1fr absolute left-1/8 bg-(--secondary-color)">
                aquí
              </li>
            </ul>
          </div>
          {/* BOTÓN SUBMIT */}
          <div className="w-full">
            <button
              type="submit"
              disabled={isPreparado}
              className="
                w-full text-2xl font-bold px-8 py-2 border border-(--gray-900)
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
        <div className="w-full grid grid-col-4 gap-10 px-8 py-2">
          <div className="cols-span-3 w-full flex flex-col justify-start items-start gap-2 rounded-[36px]">
            <label htmlFor="cuerpo" className="text-xl">
              Cuerpo
            </label>
            <textarea
              name="cuerpo"
              id="cuerpo"
              value={form.cuerpo}
              onChange={handleChange}
              className="resize-none size-full p-8 rounded-[22px] border border-(--gray-900) focus:border-(--accent-color)/80 focus:outline-none focus:ring-4 focus:ring-(--secondary-color) transition-all transform duration-150"
            ></textarea>
          </div>
          <div className="cols-span-1 w-full flex flex-col justify-start items-start gap-2">
            <label htmlFor="resumen" className="text-xl">
              Resumen
            </label>
            <input
              type="text"
              name="resumen"
              id="resumen"
              maxLength={255}
              value={form.resumen}
              onChange={handleChange}
              className="w-full text-lg px-6 py-2 line-clamp-3 rounded-xl border border-(--gray-900) focus:border-(--accent-color)/80 focus:outline-none focus:ring-4 focus:ring-(--secondary-color) transition-all transform duration-150"
            />
          </div>
        </div>
      </form>
    </>
  );
}
