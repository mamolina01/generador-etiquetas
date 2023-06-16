import { useContext } from "react";
import { StickerContext } from "../context";
import Swal from "sweetalert2";
import { getDateParsed } from "../helpers/getDateParsed";

export const useManageStickers = () => {
	const { addSticker, setStickers, removeSticker, editSticker } =
		useContext(StickerContext);

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

			if (!response.ok) {
				console.log(response);
				return response.msg;
			}

			const { data } = response;
			let tempData = data;
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
			let tempData = data;
			tempData.map((sticker) => (sticker.date = getDateParsed(sticker.date)));
			setStickers(tempData);
			return false;
		} catch (error) {
			console.log(error);
			return error?.msg || "--";
		}
	};

	const deleteSticker = async (sticker) => {
		const token = localStorage.getItem("token") ?? "";
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
		const token = localStorage.getItem("token") ?? "";
		try {
			const response = await fetch(
				`http://localhost:4000/api/stickers/${sticker.id}`,
				{
					method: "PUT",
					body: JSON.stringify(sticker),
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
