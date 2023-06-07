import React, { useContext, useState } from "react";
import { StickerContext } from "../../context";
import { StickerCard, StickerAdvice } from "./components";
import { generateID } from "../../helpers/generateID";
import { generatePDF } from "./helpers/generatePDF";

export const StickerList = () => {
  const { stickers,user } = useContext(StickerContext);
  const [toPrint, setToPrint] = useState([]);

  // console.log(stickers)

  const addStickersToPrint = (newSticker) => {
    setToPrint([...toPrint, newSticker]);
  };

  const removeStickersToPrint = (stickerToRemove) => {
    const temp = toPrint;

    const newStickers = temp.filter((item) => item.id !== stickerToRemove.id);

    setToPrint(newStickers);
  };

  const handleInput = (e) => {
    if (e.checked) {
      const allChecked = [];
      stickers.map((sticker) => allChecked.push(sticker));
      setToPrint(allChecked);
    } else {
      setToPrint([]);
    }
  };

  const handleImprimir = () => {

    generatePDF(toPrint,user);
  };
  return (
    <>
      <div className=" w-full h-screen overflow-auto scroll-auto">
        <div className="flex flex-col justify-center scroll-auto py-3 mx-auto w-11/12 lg:w-1/2">
          <h1 className="text-center text-zinc-800 font-bold text-3xl p-2 uppercase">
            Mis Etiquetas
          </h1>

          <div className="bg-white rounded-md p-2 my-5 flex justify-between text-zinc-800 items-center shadow-md shadow-stone-400">
            <div className="flex gap-2">
              <input type="checkbox" onChange={(e) => handleInput(e.target)} />
              <p>Seleccionar Todos</p>
            </div>

            <button
              className=" bg-indigo-600 text-white p-1 rounded-sm font-semibold hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed"
              disabled={toPrint.length === 0}
              onClick={() => handleImprimir()}
            >
              Imprimir
            </button>
          </div>
          {stickers.length === 0 ? (
            <StickerAdvice />
          ) : (
            stickers.map((sticker) => (
              <StickerCard
                key={sticker.id}
                sticker={sticker}
                toPrint={toPrint}
                removeStickersToPrint={removeStickersToPrint}
                addStickersToPrint={addStickersToPrint}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};
