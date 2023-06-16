import React, { useEffect, useRef, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import {
	BsFillTelephoneFill,
	BsCalendar,
	BsTrashFill,
	BsChevronRight,
	BsFillCheckSquareFill,
} from "react-icons/bs";

import { ImCheckboxUnchecked } from "react-icons/im";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useManageStickers } from "../../../hooks";

export const StickerCard = ({
	sticker,
	selected,
	addStickersToPrint,
	removeStickersToPrint,
}) => {
	const checkedInputRef = useRef();

	const { deleteSticker } = useManageStickers();
	const [checked, setChecked] = useState(false);
	const [showMore, setShowMore] = useState(false);

	const handleChecked = (e) => {
		if (e.target.checked) {
			addStickersToPrint(sticker);
		} else {
			removeStickersToPrint(sticker);
		}
	};

	useEffect(() => {
		const finded = selected.find((item) => item.id === sticker.id);
		setChecked(!!finded);
	}, [selected]);

	return (
		<>
			<div className="flex bg-white text-zinc-700 gap-2 p-2 rounded-md mb-3 shadow-md shadow-stone-400 items-center">
				<input
					type="checkbox"
					checked={checked}
					ref={checkedInputRef}
					className="hidden"
					onChange={(e) => handleChecked(e)}
				/>

				<div
					className={`${
						!checked ? "cursor-pointer text-lg text-indigo-600" : "hidden"
					}`}
				>
					<ImCheckboxUnchecked
						onClick={() => checkedInputRef.current.click()}
					/>
				</div>
				<div
					className={`${
						checked ? "cursor-pointer text-lg text-indigo-600" : "hidden"
					}`}
				>
					<BsFillCheckSquareFill
						onClick={() => checkedInputRef.current.click()}
					/>
				</div>

				<div
					className={`grid grid-cols-6 gap-1 transition-all auto-cols-auto ease-in-out duration-900 w-full`}
				>
					<div className=" col-span-6 flex items-center">
						<MdLocationPin />
						<p className="font-bold uppercase text-lg">{sticker.address}</p>
					</div>
					<div className="flex gap-1 col-span-3 md:col-span-2 items-center capitalize">
						<FaUserAlt />
						<p>{sticker.nameReceiver}</p>
					</div>
					<div className="flex gap-1 col-span-3 md:col-span-2 items-center">
						<BsFillTelephoneFill />
						<p>{sticker.telephone}</p>
					</div>
					<div
						className={`${
							showMore ? "flex" : "hidden md:flex"
						} flex-col md:flex-row gap-1 col-span-3 md:col-span-2 md:items-center transition-all`}
					>
						<BsCalendar />
						<p>{sticker.date}</p>
					</div>
					<div
						className={`${
							showMore ? "flex" : "hidden"
						} flex-col gap-1 col-span-3 md:col-span-2  transition-all`}
					>
						<p className="font-bold">Entre</p>
						<p>{sticker.betweenStreets}</p>
					</div>
					<div
						className={`${
							showMore ? "flex" : "hidden"
						} flex-col gap-1 col-span-3 md:col-span-2  transition-all`}
					>
						<p className="font-bold">Barrio</p>
						<p>{sticker.neighborhood}</p>
					</div>
					<div
						className={`${
							showMore ? "flex" : "hidden"
						} flex-col gap-1 col-span-3 md:col-span-2  transition-all`}
					>
						<p className="font-bold">Observaciones</p>
						<p>{sticker.observations}</p>
					</div>
					<div className="flex justify-center cursor-pointer gap-1 border-2 rounded-md w-full border-indigo-700 text-indigo-700 hover:bg-indigo-700 hover:text-white transition-all p-1 col-span-3">
						<Link
							to={`/generate/${sticker.id}`}
							className="flex w-full h-full justify-center items-center"
						>
							<BiEdit className="text-lg" />
							<p className="text-sm uppercase font-semibold">Modificar</p>
						</Link>
					</div>
					<div
						className="flex justify-center cursor-pointer gap-1 border-2 rounded-md w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all p-1 col-span-3 items-center"
						onClick={() => {
							deleteSticker(sticker);
						}}
					>
						<BsTrashFill className="text-lg" />
						<p className="text-sm uppercase font-semibold">Eliminar</p>
					</div>
				</div>
				<div
					className={`text-xl transition-all text-zinc-900 ${
						showMore && "rotate-90"
					}`}
				>
					<BsChevronRight onClick={() => setShowMore(!showMore)} />
				</div>
			</div>
		</>
	);
};
