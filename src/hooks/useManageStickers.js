import { useContext } from "react";
import { StickerContext } from "../context";
import Swal from "sweetalert2";
import { getDateParsed } from "../helpers/getDateParsed";
import stickerApi from "../api/stickerApi";

export const useManageStickers = () => {
	const { addSticker, setStickers, removeSticker, editSticker } =
		useContext(StickerContext);

	const saveSticker = async (sticker) => {
		try {
			const { data } = await stickerApi.post(`/stickers`, sticker);

			if (!data.ok) {
				console.log(data);
				return data.msg;
			}

			const { data: newSticker } = data;
			let tempData = newSticker;
			tempData.date = getDateParsed(tempData.date);
			addSticker(tempData);
			Swal.fire({
				icon: "success",
				title: "Etiqueta guardada",
				text: "Disponible en Mis Etiquetas",
				showConfirmButton: false,
				timer: 1500,
				returnFocus: false,
			});
			return false;
		} catch (error) {
			console.log(error);
			return error?.msg || "--";
		}
	};
	const getStickers = async () => {
		try {
			const { data } = await stickerApi.get("/stickers");

			if (!data.ok) {
				console.log(data);
				return data.msg;
			}

			const { data: stickers } = data;
			let tempData = stickers;
			tempData.map((sticker) => (sticker.date = getDateParsed(sticker.date)));
			setStickers(tempData);
			return false;
		} catch (error) {
			console.log(error);
			return error?.msg || "--";
		}
	};

	const deleteSticker = async (sticker) => {
		try {
			const { data } = await stickerApi.delete(`/stickers/${sticker.id}`);

			if (!data.ok) {
				console.log(data);
				return data.msg;
			}

			removeSticker([sticker]);

			Swal.fire({
				icon: "success",
				title: "Etiqueta eliminada",
				// text: "Disponible en Mis Etiquetas",
				showConfirmButton: false,
				timer: 1500,
				returnFocus: false,
			});
			return false;
		} catch (error) {
			console.log(error);
			return error?.msg || "--";
		}
	};

	const updateSticker = async (sticker) => {
		try {
			const { data } = await stickerApi.put(`/stickers/${sticker.id}`, sticker);

			if (!data.ok) {
				console.log(data);
				return data.msg;
			}

			editSticker(sticker);
			Swal.fire({
				icon: "success",
				title: "Etiqueta modificada",
				text: "Disponible en Mis Etiquetas",
				showConfirmButton: false,
				timer: 1500,
				returnFocus: false,
			});
			return false;
		} catch (error) {
			console.log(error);
			return error?.msg || "--";
		}
	};

	return {
		saveSticker,
		getStickers,
		deleteSticker,
		updateSticker,
	};
};
