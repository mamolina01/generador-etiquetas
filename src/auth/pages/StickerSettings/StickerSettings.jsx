import React, { useContext, useRef, useState } from "react";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { useForm } from "../../../hooks";
import { StickerContext } from "../../../context";
import { uploadFile } from "./helpers";

export const StickerSettings = () => {
	const { setUser, setIsLogged } = useContext(StickerContext);

	const fileInputRef = useRef();
	const { formState, isFormValid, onInputChange, setFormState, resetForm } =
		useForm({
			nombre: "",
			instagram: "",
			whatsapp: "",
			logo: "",
		});

	const [error, setError] = useState(false);

	const onFileInputChange = async ({ target }) => {
		if (target.files === 0) return;
		console.log(target.files[0]);
		const resp = await uploadFile(target.files[0]);

		setFormState({
			...formState,
			logo: resp,
		});
	};

	const handleSubmit = () => {
		const validation = isFormValid();
		if (!validation) {
			setError(true);
			return;
		}
		setError(false);
		setUser(formState);
		setIsLogged(true);

		resetForm();
	};

	return (
		<>
			<div className=" w-full h-screen overflow-auto scroll-auto">
				<div className="flex flex-col justify-center scroll-auto mx-auto w-11/12 md:w-1/2 animate__animated animate__fadeIn animate__faster">
					<h1 className="text-center text-zinc-800 font-bold text-3xl p-2 uppercase">
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
							className="border-b-2 rounded-none border-zinc-700 w-full py-2 placeholder-grey-400 text-sm outline-none"
						/>

						<label
							htmlFor="logo"
							className="block text-zinc-700 uppercase font-bold"
						>
							Logo del Negocio
						</label>
						<input
							type="file"
							ref={fileInputRef}
							onChange={(e) => onFileInputChange(e)}
							className="hidden"
						/>
						<div className="border-b-2 border-zinc-700 w-full py-2">
							<div className="flex flex-col items-center gap-1 p-2 border-dashed border-2 border-zinc-400 rounded-md w-full py-2 ">
								<BsFillCloudArrowUpFill size="3em" className=" text-zinc-700" />
								<p className="text-zinc-700 font-semibold text-xl">
									Arrastra un archivo
								</p>
								<p className="text-zinc-700 font-semibold text-xl">O</p>
								<button
									className="bg-indigo-700 h-min p-2 rounded-sm text-white font-semibold text-sm hover:bg-indigo-800 cursor-pointer transition-all"
									onClick={() => fileInputRef.current.click()}
								>
									Buscar Archivo
								</button>
							</div>
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
							className="border-b-2 rounded-none border-zinc-700 w-full py-2 placeholder-grey-400 text-sm outline-none"
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
							className="border-b-2 rounded-none border-zinc-700 w-full py-2 placeholder-grey-400 text-sm outline-none"
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
