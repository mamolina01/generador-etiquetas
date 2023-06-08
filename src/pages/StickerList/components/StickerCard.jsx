import React, { useContext, useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneFill, BsCalendar } from "react-icons/bs";
import { StickerContext } from "../../../context";

export const StickerCard = ({
  sticker,
  toPrint,
  addStickersToPrint,
  removeStickersToPrint,
}) => {
  const { removeSticker } = useContext(StickerContext);
  const [checked, setChecked] = useState(false);

  const handleChecked = (e) => {
    if (e.target.checked) {
      addStickersToPrint(sticker);
    } else {
      removeStickersToPrint(sticker);
    }
  };

  useEffect(() => {
    const finded = toPrint.find((item) => item.id === sticker.id);
    setChecked(!!finded);
  }, [toPrint]);

  return (
    <>
      <div className="flex bg-white text-zinc-700 gap-2 p-2 rounded-md mb-3 shadow-md shadow-stone-400">
        <div className="flex flex-col justify-evenly">
          <input
            type="checkbox"
            checked={checked}
            className="cursor-pointer"
            onChange={(e) => handleChecked(e)}
          />
          <button
            className="items-center text-xl font-semibold text-red-600 text-center"
            onClick={() => {
              removeSticker(sticker);
            }}
          >
            X
          </button>
        </div>

        <div className=" grid grid-cols-3 grid-rows-2 w-full">
          <div className=" col-span-3 flex items-center">
            <MdLocationPin />
            <p className="font-bold uppercase text-lg">{sticker.direccion}</p>
          </div>
          <div className="flex gap-1 items-center">
            <FaUserAlt />
            <p>{sticker.nombre}</p>
          </div>
          <div className="flex gap-1 items-center">
            <BsFillTelephoneFill />
            <p>{sticker.telefono}</p>
          </div>
          <div className="flex gap-1 items-center">
            <BsCalendar />
            <p>{sticker.fecha}</p>
          </div>
        </div>
      </div>
    </>
  );
};
