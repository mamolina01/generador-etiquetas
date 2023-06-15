import { useContext } from "react";
import { StickerContext } from "../context";
import { generateID } from "../helpers";

export const useManageStickers = () => {
	const { addSticker, editSticker } = useContext(StickerContext);

	const saveSticker = async (sticker) => {
		const token = localStorage.getItem("token") ?? "";
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
				return response.msg;
			}

			console.log(sticker);
			addSticker(sticker);
			return false;
		} catch (error) {
			console.log(error);
			return error?.msg || "--";
		}
	};

	const getStickers = async () => {
		const token = localStorage.getItem("token") ?? "";
		try {
			const data = await fetch("http://localhost:4000/api/stickers", {
				method: "POST",
				body: JSON.stringify(sticker),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
					"x-token": token,
				},
			})
				.then((response) => response.json())
				.then((json) => json);

			console.log(data);
			if (!data.ok) {
				console.log(data);
				return data.msg;
			}

			console.log(sticker);
			addSticker(sticker);
			return false;
		} catch (error) {
			console.log(error);
			return error?.msg || "--";
		}
	};

	const deleteSticker = async () => {};
	const updateSticker = async () => {};

	return {
		saveSticker,
		getStickers,
		deleteSticker,
		updateSticker,
	};
};
