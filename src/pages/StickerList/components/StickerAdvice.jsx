import React from "react";
import { FcAddDatabase } from "react-icons/fc";
import { Link } from "react-router-dom";

export const StickerAdvice = () => {
	return (
		<>
			<div className="w-full  bg-white p-2 rounded-md text-center shadow-md shadow-stone-400">
				<Link to="/generate">
					<FcAddDatabase size="10em" className="mx-auto cursor-pointer" />
				</Link>
				<p className="m-2 text-lg font-semibold text-zinc-800">
					Crea tu primer etiqueta
				</p>
			</div>
		</>
	);
};
