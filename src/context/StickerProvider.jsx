import React, { useEffect, useState } from "react";
import { StickerContext } from "./StickerContext";
import { generateID } from "../helpers/generateID";

export const StickerProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) ?? {}
  );
  const [isLogged, setIsLogged] = useState(
    JSON.parse(localStorage.getItem("isLogged")) ?? false
  );

  const [stickers, setStickers] = useState(
    JSON.parse(localStorage.getItem("stickers")) ?? []
  );

  const addSticker = (newSticker) => {
    newSticker.id = generateID();
    console.log(newSticker);
    setStickers([...stickers, newSticker]);
  };

  const removeSticker = (stickerToRemove) => {
    const temp = stickers;
    const newStickers = temp.filter((item) => item.id !== stickerToRemove.id);
    setStickers(newStickers);
  };

  useEffect(() => {
    localStorage.setItem("stickers", JSON.stringify(stickers));
  }, [stickers]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("isLogged", JSON.stringify(isLogged));
  }, [isLogged]);

  return (
    <StickerContext.Provider
      value={{
        stickers,
        user,
        isLogged,
        setIsLogged,
        setUser,
        addSticker,
        removeSticker,
      }}
    >
      {children}
    </StickerContext.Provider>
  );
};
