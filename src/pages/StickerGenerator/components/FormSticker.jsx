import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "../../../hooks";
import { HeaderSticker } from "./HeaderSticker";
import { StickerContext } from "../../../context";
import { getActualDate } from "../../../helpers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const FormSticker = ({ stickerToEdit }) => {
	const inputRef = useRef(null);
	const { addSticker, editSticker, profile } = useContext(StickerContext);

	const navigate = useNavigate();
	const [error, setError] = useState(false);
	const { formState, isFormValid, onInputChange, setFormState, resetForm } =
		useForm({
			direccion: "",
			entreCalles: "",
			barrio: "",
			nombre: "",
			telefono: "",
			fecha: getActualDate(),
			observaciones: "",
		});

	useEffect(() => {
		// const exists = stickers.filter((sticker) => sticker.id === stickerId);
		if (stickerToEdit.length !== 0) {
			setFormState(stickerToEdit[0]);
		} else {
			resetForm();
		}
	}, [stickerToEdit]);

	const handleSubmit = () => {
		const validation = isFormValid();
		if (!validation) {
			setError(true);
			return;
		}
		setError(false);

		Swal.fire({
			icon: "success",
			title: "Etiqueta guardada",
			text: "Disponible en Mis Etiquetas",
			showConfirmButton: false,
			timer: 1500,
			returnFocus: false,
		});

		if (formState.id) {
			editSticker(formState);
			navigate("/");
		} else {
			addSticker(formState);
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
							COMPLETA TODOS LOS CAMPOS
						</p>
					)}

					<div>
						<label
							htmlFor="direccion"
							className="block text-zinc-700 uppercase font-semibold"
						>
							Dirección
						</label>
						<input
							ref={inputRef}
							id="direccion"
							type="text"
							name="direccion"
							placeholder="Dirección del destinatario"
							value={formState.direccion}
							onChange={(e) => onInputChange(e)}
							className="border-b-2 rounded-none border-zinc-300 w-full py-1 placeholder-grey-400 text-sm outline-none"
						/>
					</div>

					<div>
						<label
							htmlFor="entreCalles"
							className="block text-zinc-700 uppercase font-semibold"
						>
							Entre calles
						</label>
						<input
							id="entreCalles"
							type="text"
							name="entreCalles"
							placeholder="Entre calles"
							value={formState.entreCalles}
							onChange={(e) => onInputChange(e)}
							className="border-b-2 rounded-none border-zinc-300 w-full py-1 placeholder-grey-400 text-sm outline-none"
						/>
					</div>

					<div>
						<label
							htmlFor="barrio"
							className="block text-zinc-700 uppercase font-semibold"
						>
							Barrio
						</label>
						<input
							id="barrio"
							type="text"
							name="barrio"
							placeholder="Barrio"
							value={formState.barrio}
							onChange={(e) => onInputChange(e)}
							className="border-b-2 rounded-none border-zinc-300 w-full py-1 placeholder-grey-400 text-sm outline-none"
						/>
					</div>

					<div>
						<label
							htmlFor="nombre"
							className="block text-zinc-700 uppercase font-semibold"
						>
							Nombre Destinatario
						</label>
						<input
							id="nombre"
							name="nombre"
							type="text"
							placeholder="Nombre del destinatario"
							value={formState.nombre}
							onChange={(e) => onInputChange(e)}
							className="border-b-2 rounded-none border-zinc-300 w-full py-1 placeholder-grey-400 text-sm outline-none"
						/>
					</div>

					<div>
						<label
							htmlFor="telefono"
							className="block text-zinc-700 uppercase font-semibold"
						>
							Telefono
						</label>
						<input
							id="telefono"
							type="text"
							name="telefono"
							placeholder="Telefono de contacto"
							value={formState.telefono}
							onChange={(e) => onInputChange(e)}
							className="border-b-2 rounded-none border-zinc-300 w-full py-1 placeholder-grey-400 text-sm outline-none"
						/>
					</div>

					<div>
						<label
							htmlFor="fecha"
							className="block text-zinc-700 uppercase font-semibold"
						>
							Fecha
						</label>
						<input
							id="fecha"
							type="date"
							name="fecha"
							value={formState.fecha}
							onChange={(e) => onInputChange(e)}
							className="border-b-2 rounded-none border-zinc-300 w-full py-1 placeholder-grey-400 text-sm outline-none"
						/>
					</div>

					<div>
						<label
							htmlFor="observaciones"
							className="block text-zinc-700 uppercase font-semibold"
						>
							Observaciones
						</label>
						<textarea
							id="observaciones"
							placeholder="Indique las observaciones"
							name="observaciones"
							value={formState.observaciones}
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
