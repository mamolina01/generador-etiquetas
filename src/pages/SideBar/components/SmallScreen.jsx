import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

export const SmallScreen = ({ user, isLoggetOut }) => {
  return (
    <>
      <div className="w-full sticky bg-zinc-800 p-2 z-20 flex lg:hidden justify-between items-center">
        <AiOutlineMenu className="text-white text-3xl " />
        <h1 className="uppercase text-white text-xl font-semibold">
          {user.nombre}
        </h1>
      </div>

      <div className="w-full relative bg-zinc-800 p-2 gap-2 z-20 flex flex-col lg:hidden justify-between items-center">
        <img
          src={`/logo.png`}
          alt="logo-marca"
          className=" w-20 h-20 mx-auto rounded-full"
        />
        <button className="text-white w-full font-semibold p-2 text-xl hover:bg-zinc-600">
          Mis Etiquetas
        </button>
        <button className="text-white w-full font-semibold p-2 text-xl hover:bg-zinc-600">
          Diseña tu Etiqueta
        </button>
      </div>

      <div className="absolute left-0 top-0 z-10 bg-black opacity-50 lg:hidden h-full w-full"></div>
    </>
  );
};
