import { useContext, useEffect, useRef, useState } from "react";
import { HeaderSticker } from "./HeaderSticker";
import { StickerContext } from "../../../context";
import { getActualDate } from "../../../helpers";
import { useManageStickers, useForm } from "../../../hooks";
import { useNavigate } from "react-router-dom";

export const FormSticker = ({ stickerToEdit }) => {
	const inputRef = useRef(null);
	const { profile } = useContext(StickerContext);
	const { saveSticker, updateSticker } = useManageStickers();
	const navigate = useNavigate();

	const [error, setError] = useState(false);
	const { formState, isFormValid, onInputChange, setFormState, resetForm } =
		useForm({
			address: "",
			betweenStreets: "",
			neighborhood: "",
			nameReceiver: "",
			telephone: "",
			date: getActualDate(),
			observations: "",
		});

	useEffect(() => {
		// const exists = stickers.filter((sticker) => sticker.id === stickerId);
		if (stickerToEdit.length !== 0) {
			setFormState(stickerToEdit[0]);
		}
		// else {
		// 	resetForm();
		// }
	}, [stickerToEdit]);

	const handleSubmit = async () => {
		const validation = isFormValid();
		if (!validation) {
			setError("COMPLETA TODOS LOS CAMPOS");
			return;
		}

		if (formState.id) {
			let message = await updateSticker(formState);
			setError(message);
			!message && navigate("/");
		} else {
			let message = await saveSticker(formState);
			setError(message);
			if (message) return;
		}

		resetForm();
		inputRef.current.focus();
	};
	return (
		<>
			<div className="bg-white shadow-md shadow-stone-400 rounded-lg  my-5">
				<div className="flex flex-col gap-2 p-5" id="pdf">
					<HeaderSticker user={profile} />
					{error && (
						<p className="w-full text-center bg-red-500 text-white font-bold p-1 mt-2">
							{error}
						</p>
					)}

					<div>
						<label
							htmlFor="address"
							className="block text-zinc-700 uppercase font-semibold"
						>
							Dirección
						</label>
						<input
							ref={inputRef}
							id="address"
							type="text"
						ºz	name="address"
							placeholder="Dirección del destinatario"
							value={formState.address}
							onChange={(e) => onInputChange(e)}
							className="border-b-2 rounded-none border-zinc-300 w-full py-1 placeholder-grey-400 text-sm outline-none"
						/>
					</div>

					<div>
						<label
							htmlFor="betweenStreets"
							className="block text-zinc-700 uppercase font-semibold"
						>
							Entre calles
						</label>
						<input
							id="betweenStreets"
							type="text"
							name="betweenStreets"
							placeholder="Entre calles"
							value={formState.betweenStreets}
							onChange={(e) => onInputChange(e)}
							className="border-b-2 rounded-none border-zinc-300 w-full py-1 placeholder-grey-400 text-sm outline-none"
						/>
					</div>

					<div>
						<label
							htmlFor="neighborhood"
							className="block text-zinc-700 uppercase font-semibold"
						>
							Barrio
						</label>
						<input
							id="neighborhood"
							type="text"
							name="neighborhood"
							placeholder="Barrio"
							value={formState.neighborhood}
							onChange={(e) => onInputChange(e)}
							className="border-b-2 rounded-none border-zinc-300 w-full py-1 placeholder-grey-400 text-sm outline-none"
						/>
					</div>

					<div>
						<label
							htmlFor="nameReceiver"
							className="block text-zinc-700 uppercase font-semibold"
						>
							Nombre Destinatario
						</label>
						<input
							id="nameReceiver"
							name="nameReceiver"
							type="text"
							placeholder="Nombre del destinatario"
							value={formState.nameReceiver}
							onChange={(e) => onInputChange(e)}
							className="border-b-2 rounded-none border-zinc-300 w-full py-1 placeholder-grey-400 text-sm outline-none"
						/>
					</div>

					<div>
						<label
							htmlFor="telephone"
							className="block text-zinc-700 uppercase font-semibold"
						>
							Telefono
						</label>
						<input
							id="telephone"
							type="text"
							name="telephone"
							placeholder="Telefono de contacto"
							value={formState.telephone}
							onChange={(e) => onInputChange(e)}
							className="border-b-2 rounded-none border-zinc-300 w-full py-1 placeholder-grey-400 text-sm outline-none"
						/>
					</div>

					<div>
						<label
							htmlFor="date"
							className="block text-zinc-700 uppercase font-semibold"
						>
							Fecha
						</label>
						<input
							id="date"
							type="date"
							name="date"
							value={formState.date}
							onChange={(e) => onInputChange(e)}
							className="border-b-2 rounded-none border-zinc-300 w-full py-1 placeholder-grey-400 text-sm outline-none"
						/>
					</div>

					<div>
						<label
							htmlFor="observations"
							className="block text-zinc-700 uppercase font-semibold"
						>
							Observaciones
						</label>
						<textarea
							id="observations"
							placeholder="Indique las observaciones"
							name="observations"
							value={formState.observations}
							onChange={(e) => onInputChange(e)}
							className="border-b-2 rounded-none border-zinc-300 w-full py-1 placeholder-grey-400 text-sm outline-none"
						/>
					</div>

					<button
						className="bg-indigo-600 w-full mt-2 p-3 text-white uppercase font-bold  
						hover:bg-indigo-700 cursor-pointer transition-all outline-none"
						onClick={handleSubmit}
					>
						{formState.id ? "Modificar etiqueta" : "Generar etiqueta"}
					</button>
				</div>
			</div>
		</>
	);
};
