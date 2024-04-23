import React, { useContext, useState } from "react";

import { FormSticker } from "./components/FormSticker";
import { useParams } from "react-router-dom";
import { StickerContext } from "../../context";

export const StickerGenerator = () => {
	const { stickerId } = useParams();
	const { stickers } = useContext(StickerContext);

	const exists = stickers.filter((sticker) => sticker.id === stickerId);

	return (
		<>
			<div className=" w-full h-screen overflow-auto scroll-auto">
				<div className="flex flex-col justify-center scroll-auto py-3 mx-auto w-9/12 lg:w-1/2 animate__animated animate__fadeIn animate__faster">
					<h1 className="text-center text-indigo-700 font-bold text-xl lg:text-3xl p-2 uppercase">
						{exists[0]?.id ? "Modificar etiqueta" : "Generar etiqueta"}
					</h1>
					<FormSticker stickerToEdit={exists} />
				</div>
			</div>
		</>
	);
};
