import React, { useContext, useRef, useState } from "react";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { useForm } from "../../../hooks";
import { StickerContext } from "../../../context";
import { uploadFile } from "./helpers";
import { InputImage } from "./components";

export const StickerSettings = () => {
	const { setUser, setIsLogged } = useContext(StickerContext);

	const fileInputRef = useRef();
	const { formState, isFormValid, onInputChange, setFormState, resetForm } =
		useForm({
			nombre: "",
			instagram: "",
			whatsapp: "",
			logo: [],
		});

	const [error, setError] = useState(false);

	const onFileInputChange = (image) => {
		setFormState({
			...formState,
			logo: image,
		});
	};

	const handleSubmit = async () => {
		const validation = isFormValid();
		if (!validation) {
			setError(true);
			return;
		}

		const resp = await uploadFile(formState.logo[0]);

		formState.logo = resp;
		setError(false);
		setUser(formState);
		setIsLogged(true);

		resetForm();
	};

	return (
		<>
			<div className=" w-full h-screen overflow-auto scroll-auto">
				<div className="flex flex-col justify-center scroll-auto mx-auto w-11/12 md:w-1/2 animate__animated animate__fadeIn animate__faster">
					<h1 className="text-center text-indigo-700 font-bold text-3xl p-2 uppercase">
						Datos a completar
					</h1>
					<div className="w-full mx-auto p-5 my-5 flex flex-col gap-2 bg-white rounded-md shadow-md shadow-stone-400">
						{error && (
							<p className="w-full text-center bg-red-500 text-white font-bold p-2 mt-2">
								COMPLETA TODOS LOS CAMPOS
							</p>
						)}
						<label
							htmlFor="nombre"
							className="block text-zinc-700 uppercase font-bold"
						>
							Nombre del negocio
						</label>
						<input
							id="nombre"
							type="text"
							name="nombre"
							placeholder="Nombre del negocio"
							value={formState.nombre}
							onChange={(e) => onInputChange(e)}
							className="border-b-2 rounded-none border-zinc-700 w-full py-2 placeholder-zinc-600 text-sm outline-none"
						/>

						<label
							htmlFor="logo"
							className="block text-zinc-700 uppercase font-bold"
						>
							Logo del Negocio
						</label>

						<div className="border-b-2 border-zinc-700 w-full py-2">
							<InputImage
								onFileInputChange={onFileInputChange}
								logo={formState.logo}
							/>
						</div>

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
							value={formState.instagram}
							onChange={(e) => onInputChange(e)}
							className="border-b-2 rounded-none border-zinc-700 w-full py-2 placeholder-zinc-600 text-sm outline-none"
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
							value={formState.whatsapp}
							onChange={(e) => onInputChange(e)}
							className="border-b-2 rounded-none border-zinc-700 w-full py-2 placeholder-zinc-600 text-sm outline-none"
						/>

						<button
							className="bg-indigo-600 w-full mt-5 p-3 text-white uppercase font-bold rounded-sm  
						hover:bg-indigo-700 cursor-pointer transition-all"
							onClick={handleSubmit}
						>
							Guardar
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
