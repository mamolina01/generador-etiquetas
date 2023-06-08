import React, { useState } from "react";

import { FormSticker } from "./components/FormSticker";

export const StickerGenerator = () => {
  return (
    <>
      <div className=" w-full h-screen overflow-auto scroll-auto">
        <div className="flex flex-col justify-center scroll-auto py-3 mx-auto w-11/12 lg:w-1/2 animate__animated animate__fadeIn animate__faster">
          <h1 className="text-center text-zinc-800 font-bold text-3xl p-2 uppercase">
            Diseña tu Etiqueta
          </h1>
          <FormSticker />
        </div>
      </div>
    </>
  );
};
