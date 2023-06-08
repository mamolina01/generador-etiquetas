import React from "react";

export const HeaderSticker = ({ user }) => {
  return (
    <div className="grid grid-cols-2 ">
      <div className="grid col-span-1">
        <img
          src={user.logo}
          alt="logo-marca"
          className=" w-28 h-28 object-cover mx-auto rounded-full"
        />
      </div>
      <div className="grid col-span-1 content-evenly">
        {/* <div className="flex flex-col justify-center bg-red-500"> */}
        <div className="flex justify-start gap-1 place-items-center">
          <img
            src="/Instagram.png"
            alt=""
            className="w-6 h-6 "
          />
          <p className=" font-bold uppercase">{user.instagram}</p>
        </div>
        <div className="flex justify-start gap-1 place-items-center">
          <img src="/whatsapp.png" alt="" className="w-6 h-6" />
          <p className=" font-bold">{user.whatsapp}</p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
