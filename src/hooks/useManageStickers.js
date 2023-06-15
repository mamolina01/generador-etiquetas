import { useContext } from "react";
import { StickerContext } from "../context";
import { generateID } from "../helpers";

export const useManageStickers = () => {
  const { addSticker, setStickers, removeSticker } = useContext(StickerContext);

  const saveSticker = async (sticker) => {
    const token = localStorage.getItem("token") ?? "";
    sticker.id = generateID();
    try {
      const response = await fetch("http://localhost:4000/api/stickers", {
        method: "POST",
        body: JSON.stringify(sticker),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-token": token,
        },
      })
        .then((response) => response.json())
        .then((json) => json);

      console.log(response);
      if (!response.ok) {
        console.log(response);
        return response.msg;
      }

      const { data } = response;
      addSticker(data);
      return false;
    } catch (error) {
      console.log(error);
      return error?.msg || "--";
    }
  };
  const getStickers = async () => {
    const token = localStorage.getItem("token") ?? "";
    try {
      const response = await fetch("http://localhost:4000/api/stickers", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-token": token,
        },
      })
        .then((response) => response.json())
        .then((json) => json);

      if (!response.ok) {
        console.log(response);
        return response.msg;
      }
      const { data } = response;
      console.log(data);
      setStickers(data);
      return false;
    } catch (error) {
      console.log(error);
      return error?.msg || "--";
    }
  };

  const deleteSticker = async (sticker) => {
    const token = localStorage.getItem("token") ?? "";
    console.log(sticker.id);
    try {
      const response = await fetch(
        `http://localhost:4000/api/stickers/${sticker.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-token": token,
          },
        }
      )
        .then((response) => response.json())
        .then((json) => json);

      if (!response.ok) {
        console.log(response);
        return response.msg;
      }

      removeSticker(sticker);
      return false;
    } catch (error) {
      console.log(error);
      return error?.msg || "--";
    }
  };
  const updateSticker = async () => {};

  return {
    saveSticker,
    getStickers,
    deleteSticker,
    updateSticker,
  };
};
