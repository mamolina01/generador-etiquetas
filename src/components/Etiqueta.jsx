import React, { useState } from "react";
import { isFormValid } from "../helpers/isFormValid";
import { useForm } from "../hooks/useForm";
import { HeaderEtiqueta } from "./HeaderEtiqueta";
import { FormEtiqueta } from "./FormEtiqueta";

export const Etiqueta = () => {
  const { formState, isFormValid, onInputChange, resetForm } = useForm({
    nombre: "",
    direccion: "",
    entreCalles: "",
    telefono: "",
    fecha: "",
    observaciones: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = isFormValid();
    if (!validation) {
      console.log("Completa todos los campos");
      return;
    }

    console.log("Todos los campos completos!");
    resetForm();
  };
  return (
    <>
      <div className="flex justify-center flex-col mx-auto p-10 w-1/2">
        <div className="p-3">
          <h1 className="text-center text-white font-bold text-3xl">
            Genera tu Etiqueta
          </h1>
          <FormEtiqueta/>
          {/* <div className="bg-white shadow-md shadow-stone-600 rounded-lg p-5"> */}

          {/* <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md shadow-stone-600 rounded-lg p-5"
          >
            <HeaderEtiqueta
              imagen={"naranja.png"}
              instagram={"eravirtual_"}
              whatsapp={"1124428371"}
            />
            <div className="mb-2">
              <label
                htmlFor="nombre"
                className="block text-gray-700 uppercase font-bold"
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
                className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md text-sm"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="direccion"
                className="block text-gray-700 uppercase font-bold"
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
                className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md text-sm"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="entreCalles"
                className="block text-gray-700 uppercase font-bold"
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
                className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md text-sm"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="telefono"
                className="block text-gray-700 uppercase font-bold"
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
                className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md text-sm"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="fecha"
                className="block text-gray-700 uppercase font-bold"
              >
                Fecha
              </label>
              <input
                id="fecha"
                type="date"
                name="fecha"
                value={formState.fecha}
                onChange={(e) => onInputChange(e)}
                className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md text-sm"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="observaciones"
                className="block text-gray-700 uppercase font-bold"
              >
                Observaciones
              </label>
              <textarea
                id="observaciones"
                placeholder="Indique las observaciones"
                name="observaciones"
                value={formState.observaciones}
                onChange={(e) => onInputChange(e)}
                className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md text-sm"
              />
            </div>

            <input
              type="submit"
              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold  
						hover:bg-indigo-700 cursor-pointer transition-all"
              value="Generar Etiqueta"
            />
          </form> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
