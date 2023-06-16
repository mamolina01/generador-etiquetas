import React, { useContext, useRef, useState } from "react";
import { StickerContext } from "../../context";
import { StickerCard, StickerAdvice } from "./components";

import { generatePDF } from "./helpers/generatePDF";
import {
	BsFillCheckSquareFill,
	BsPrinterFill,
	BsTrashFill,
} from "react-icons/bs";
import { ImCheckboxUnchecked } from "react-icons/im";

export const StickerList = () => {
	const { stickers, profile, removeSticker } = useContext(StickerContext);
	const [selected, setSelected] = useState([]);
	const checkedAllInputRef = useRef(null);

	const addStickersToPrint = (newSticker) => {
		setSelected([...selected, newSticker]);
	};

	const removeStickersToPrint = (stickerToRemove) => {
		const temp = selected;

		const newStickers = temp.filter((item) => item.id !== stickerToRemove.id);

		setSelected(newStickers);
	};

	const handleInput = (e) => {
		if (e.checked) {
			const allChecked = [];
			stickers.map((sticker) => allChecked.push(sticker));
			setSelected(allChecked);
		} else {
			setSelected([]);
		}
	};

	const handlePrint = () => {
		generatePDF(selected, profile);
	};

	return (
		<>
			<div className=" w-full h-screen overflow-auto scroll-auto">
				<div className="flex flex-col justify-center scroll-auto py-3 mx-auto w-11/12 lg:w-1/2 animate__animated animate__fadeIn animate__faster">
					<h1 className="text-center text-indigo-700 font-bold text-3xl p-2 uppercase">
						Mis Etiquetas
					</h1>

					<div className="bg-white rounded-md p-2 my-5 flex justify-between text-zinc-800 items-center shadow-md shadow-stone-400">
						<div className="flex gap-2 items-center">
							<input
								id="selectAll"
								ref={checkedAllInputRef}
								type="checkbox"
								className="hidden"
								onChange={(e) => handleInput(e.target)}
							/>
							<div
								className={`${
									!checkedAllInputRef.current?.checked
										? "cursor-pointer text-lg text-indigo-600"
										: "hidden"
								}`}
							>
								<ImCheckboxUnchecked
									onClick={() => checkedAllInputRef.current.click()}
								/>
							</div>
							<div
								className={`${
									checkedAllInputRef.current?.checked
										? "cursor-pointer text-lg text-indigo-600"
										: "hidden"
								}`}
							>
								<BsFillCheckSquareFill
									onClick={() => checkedAllInputRef.current.click()}
								/>
							</div>
							<label htmlFor="selectAll" className="cursor-pointer">
								Seleccionar Todos
							</label>
						</div>

						<div className="flex gap-2">
							<button
								className="flex items-center gap-1 bg-indigo-600 text-white p-1 rounded-sm font-semibold transition-all hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed"
								disabled={selected.length === 0}
								onClick={() => handlePrint()}
							>
								<BsPrinterFill />
								Imprimir
							</button>
							<button
								className="flex items-center gap-1 bg-red-500 text-white p-1 rounded-sm font-semibold transition-all hover:bg-red-700 disabled:bg-red-300 disabled:cursor-not-allowed"
								disabled={selected.length === 0}
								onClick={() => removeSticker(selected)}
							>
								<BsTrashFill />
								Eliminar
							</button>
						</div>
					</div>
					<div className=" flex flex-col overflow-y-auto w-full max-h-96 p-3">
						{stickers.length === 0 ? (
							<StickerAdvice />
						) : (
							stickers.map((sticker) => (
								<StickerCard
									key={sticker.id}
									sticker={sticker}
									selected={selected}
									removeStickersToPrint={removeStickersToPrint}
									addStickersToPrint={addStickersToPrint}
								/>
							))
						)}
					</div>
				</div>
			</div>
		</>
	);
};
