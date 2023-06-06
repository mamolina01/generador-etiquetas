import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="h-screen w-max bg-zinc-800 flex flex-col text-slate-100 font-bold text-center text-lg">
      <div className="mt-24 mb-5">
        <Link to="/">
          <img
            src={`/naranja.png`}
            alt="logo-marca"
            className=" w-20 h-20 mx-auto"
          />
        </Link>
      </div>
      <Link to="/">
        <p className="p-3 cursor-pointer border-y-2 border-zinc-500 whitespace-nowrap transition-all hover:bg-zinc-700">
          Mis Etiquetas
        </p>
      </Link>
      <Link to="/generate">
        <p className="p-3 cursor-pointer border-b-2 border-zinc-500 whitespace-nowrap transition-all hover:bg-zinc-700">
          Generar Etiqueta
        </p>
      </Link>
    </div>
  );
};
