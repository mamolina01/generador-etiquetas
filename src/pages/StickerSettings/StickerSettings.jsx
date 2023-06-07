import React from "react";

export const StickerSettings = () => {
	return (
		<>
			<div className=" w-full h-screen overflow-auto scroll-auto">
				<div className="flex flex-col justify-center scroll-auto mx-auto w-1/2">
					<h1 className="text-center text-zinc-800 font-bold text-3xl p-2 uppercase">
						Datos a completar
					</h1>
					<div className="w-full mx-auto p-5 flex flex-col gap-2 bg-white rounded-md">
						<label
							htmlFor="nombreNegocio"
							className="block text-zinc-700 uppercase font-bold"
						>
							Nombre del negocio
						</label>
						<input
							id="nombreNegocio"
							type="text"
							name="nombreNegocio"
							placeholder="Nombre del negocio"
							// value="holaa"
							onChange={(e) => onInputChange(e)}
							className="border-b-2 border-zinc-700 w-full py-2 placeholder-grey-400 text-sm outline-none"
						/>
						<label
							htmlFor="instagram"
							className="block text-zinc-700 uppercase font-bold"
						>
							Instagram
						</label>
						<input
							id="instagram"
							type="text"
							name="instagram"
							placeholder="Usuario de Instagram"
							// value="holaa"
							onChange={(e) => onInputChange(e)}
							className="border-b-2 border-zinc-700 w-full py-2 placeholder-grey-400 text-sm outline-none"
						/>

						<label
							htmlFor="whatsapp"
							className="block text-zinc-700 uppercase font-bold"
						>
							Whatsapp
						</label>
						<input
							id="whatsapp"
							type="text"
							name="whatsapp"
							placeholder="Número de Whatsapp"
							// value="holaa"
							onChange={(e) => onInputChange(e)}
							className="border-b-2 border-zinc-700 w-full py-2 placeholder-grey-400 text-sm outline-none"
						/>
					</div>
				</div>
			</div>
		</>
	);
};
