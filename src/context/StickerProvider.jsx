import React, { useEffect, useState } from "react";
import { StickerContext } from "./StickerContext";
import { generateID } from "../helpers/generateID";

export const StickerProvider = ({ children }) => {
  const [stickers, setStickers] = useState([]);
  const addSticker = (newSticker) => {
    newSticker.id = generateID();
    setStickers([...stickers, newSticker]);
  };

  const removeSticker = (stickerToRemove) => {
    const temp = stickers;

    const newStickers = temp.filter((item) => item.id !== stickerToRemove.id);

    setStickers(newStickers);
  };

  //   useEffect(() => {
  //     const products = JSON.parse(localStorage.getItem("shoppingCart"));
  //     if (products) {
  //       setShoppingCart(products);
  //     }
  //   }, []);

  return (
    <StickerContext.Provider
      value={{
        stickers,
        addSticker,
        removeSticker
      }}
    >
      {children}
    </StickerContext.Provider>
  );
};
