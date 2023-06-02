import { isFormValid } from "../helpers/isFormValid";
import { useForm } from "../hooks/useForm";
import { HeaderEtiqueta } from "./HeaderEtiqueta";
// import { PDFconverter } from "../helpers";
import { Preview, print } from "react-html2pdf";

export const FormEtiqueta = () => {
  const { formState, isFormValid, onInputChange, resetForm } = useForm({
    nombre: "",
    direccion: "",
    entreCalles: "",
    telefono: "",
    fecha: "",
    observaciones: "",
  });

  const handleSubmit = () => {
    const validation = isFormValid();
    if (!validation) {
      console.log("Completa todos los campos");
      return;
    }

    console.log("Todos los campos completos!");
    print("a", "pdf");
    resetForm();
  };
  return (
    <>
      <div className="bg-white shadow-md shadow-stone-600 rounded-lg p-5">
        <div className="flex flex-col gap-2" id="pdf">
          <HeaderEtiqueta
            imagen={"naranja.png"}
            instagram={"eravirtual_"}
            whatsapp={"1124428371"}
          />
          <label
            htmlFor="nombre"
            className="block text-zinc-700 uppercase font-bold"
          >
            Nombre Destinatario
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Nombre del destinatario"
            value={formState.nombre}
            onChange={(e) => onInputChange(e)}
            className="border-b-2 border-zinc-700 w-full p-2 placeholder-grey-400 text-sm outline-none"
          />

          <label
            htmlFor="direccion"
            className="block text-zinc-700 uppercase font-bold"
          >
            Dirección
          </label>
          <input
            id="direccion"
            type="text"
            name="direccion"
            placeholder="Dirección del destinatario"
            value={formState.direccion}
            onChange={(e) => onInputChange(e)}
            className="border-b-2 border-zinc-700 w-full p-2  placeholder-grey-400 text-sm outline-none"
          />

          <label
            htmlFor="entreCalles"
            className="block text-zinc-700 uppercase font-bold"
          >
            Entre calles
          </label>
          <input
            id="entreCalles"
            type="text"
            name="entreCalles"
            placeholder="Entre calles"
            value={formState.entreCalles}
            onChange={(e) => onInputChange(e)}
            className="border-b-2 border-zinc-700 w-full p-2  placeholder-grey-400 text-sm outline-none"
          />

          <label
            htmlFor="telefono"
            className="block text-zinc-700 uppercase font-bold"
          >
            Telefono
          </label>
          <input
            id="telefono"
            type="text"
            name="telefono"
            placeholder="Telefono de contacto"
            value={formState.telefono}
            onChange={(e) => onInputChange(e)}
            className="border-b-2 border-zinc-700 w-full p-2  placeholder-grey-400 text-sm outline-none"
          />

          <label
            htmlFor="fecha"
            className="block text-zinc-700 uppercase font-bold"
          >
            Fecha
          </label>
          <input
            id="fecha"
            type="date"
            name="fecha"
            value={formState.fecha}
            onChange={(e) => onInputChange(e)}
            className="border-b-2 border-zinc-700 w-full p-2  placeholder-grey-400 text-sm outline-none"
          />

          <label
            htmlFor="observaciones"
            className="block text-zinc-700 uppercase font-bold"
          >
            Observaciones
          </label>
          <textarea
            id="observaciones"
            placeholder="Indique las observaciones"
            name="observaciones"
            value={formState.observaciones}
            onChange={(e) => onInputChange(e)}
            className="border-b-2 border-zinc-700 w-full p-2  placeholder-grey-400 text-sm outline-none"
          />
        </div>
        <button
          className="bg-indigo-600 w-full mt-5 p-3 text-white uppercase font-bold  
						hover:bg-indigo-700 cursor-pointer transition-all"
          onClick={handleSubmit}
        >
          Generar etiqueta
        </button>
      </div>
    </>
  );
};
