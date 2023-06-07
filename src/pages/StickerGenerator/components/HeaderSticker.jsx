import React from "react";

export const HeaderSticker = ({ imagen, instagram, whatsapp }) => {
  return (
    <div className="grid grid-cols-2 ">
      <div className="grid col-span-1">
        <img
          src={`/${imagen}`}
          alt="logo-marca"
          className=" w-28 h-28 mx-auto"
        />
      </div>
      <div className="grid col-span-1 content-evenly">
        {/* <div className="flex flex-col justify-center bg-red-500"> */}
        <div className="flex justify-start gap-1 place-items-center">
          <img src="/Instagram.png" alt="" className="w-6 h-6" />
          <p className="text-lg font-bold uppercase whitespace-nowrap ">{instagram}</p>
        </div>
        <div className="flex justify-start gap-1 place-items-center">
          <img src="/whatsapp.png" alt="" className="w-6 h-6" />
          <p className="text-lg font-bold">{whatsapp}</p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
