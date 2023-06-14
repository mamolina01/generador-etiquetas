import React, { useEffect, useState } from "react";
import { StickerContext } from "./StickerContext";
import { generateID } from "../helpers/generateID";

export const StickerProvider = ({ children }) => {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) ?? {}
	);
	const [profile, setProfile] = useState(
		JSON.parse(localStorage.getItem("profile")) ?? {}
	);
	const [isLogged, setIsLogged] = useState(
		JSON.parse(localStorage.getItem("isLogged")) ?? false
	);

	const [stickers, setStickers] = useState(
		JSON.parse(localStorage.getItem("stickers")) ?? []
	);

	const setLogout = () => {
		setUser({});
		setProfile({});
		setStickers([]);
		setIsLogged(false);
	};

	const addSticker = (newSticker) => {
		newSticker.id = generateID();
		setStickers([...stickers, newSticker]);
	};

	const removeSticker = (stickerToRemove) => {
		let temp = stickers;
		stickerToRemove.map(
			(sticker) => (temp = temp.filter((item) => item.id !== sticker.id))
		);

		setStickers(temp);
	};

	const editSticker = (stickerToEdit) => {
		const tempStickers = stickers.map((item) =>
			item.id === stickerToEdit.id ? stickerToEdit : item
		);
		setStickers(tempStickers);
	};

	useEffect(() => {
		localStorage.setItem("stickers", JSON.stringify(stickers));
	}, [stickers]);

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(user));
	}, [user]);

	useEffect(() => {
		localStorage.setItem("profile", JSON.stringify(profile));
	}, [profile]);

	useEffect(() => {
		localStorage.setItem("isLogged", JSON.stringify(isLogged));
	}, [isLogged]);

	return (
		<StickerContext.Provider
			value={{
				stickers,
				user,
				isLogged,
				profile,
				setProfile,
				setIsLogged,
				setUser,
				addSticker,
				removeSticker,
				editSticker,
				setLogout,
			}}
		>
			{children}
		</StickerContext.Provider>
	);
};
