import React from "react";
import { useState } from "react";
import { useAuthenthicated, useForm } from "../../../hooks";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StickerContext } from "../../../context";

export const AuthRegister = () => {
	const [error, setError] = useState(false);
	// const { setUser, setProfile, setIsLogged } = useContext(StickerContext);
	const { startRegister } = useAuthenthicated();

	const { formState, isFormValid, onInputChange, setFormState, resetForm } =
		useForm({
			name: "",
			email: "",
			password: "",
		});

	const handleSubmit = async () => {
		const validation = isFormValid();

		if (!validation) {
			setError("COMPLETA TODOS LOS CAMPOS");
			return;
		}

		// startRegister(formState)

		setError(false);
		resetForm();
	};
	return (
		<>
			<div className=" w-full h-screen max-h-screen overflow-auto scroll-auto">
				<div className="flex flex-col  justify-center mx-auto w-11/12 md:w-1/2 animate__animated animate__fadeIn animate__faster">
					<h1 className="text-center text-indigo-700 font-bold text-3xl p-2 mt-5 uppercase">
						Generador de Etiquetas
					</h1>
					<div className="w-full mx-auto p-5 mt-5 flex flex-col gap-3 bg-white rounded-md shadow-md shadow-stone-400">
						<h3 className="text-center  font-semibold text-indigo-600 text-2xl">
							Registrate
						</h3>
						{error && (
							<p className="w-full text-center bg-red-500 text-white font-bold p-2 mt-2">
								{error}
							</p>
						)}
						<div>
							<label
								htmlFor="name"
								className="block text-zinc-700 uppercase font-semibold"
							>
								Nombre de tu marca
							</label>
							<input
								id="name"
								type="text"
								name="name"
								placeholder="Escribí el nombre de tu marca"
								value={formState.name}
								onChange={(e) => onInputChange(e)}
								className="border-b-2 rounded-none border-zinc-300 w-full py-1 placeholder-zinc-600 text-sm outline-none"
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-zinc-700 uppercase font-semibold"
							>
								Email
							</label>
							<input
								id="email"
								type="text"
								name="email"
								placeholder="Escribí el email para tu cuenta"
								value={formState.email}
								onChange={(e) => onInputChange(e)}
								className="border-b-2 rounded-none border-zinc-300 w-full py-1 placeholder-zinc-600 text-sm outline-none"
							/>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-zinc-700 uppercase font-semibold"
							>
								Contraseña
							</label>
							<input
								id="password"
								type="password"
								name="password"
								placeholder="Definí la contraseña"
								value={formState.password}
								onChange={(e) => onInputChange(e)}
								className="border-b-2 rounded-none border-zinc-300 w-full py-1 placeholder-zinc-600 text-sm outline-none"
							/>
						</div>

						<p className="text-center p-2 mt-1 text-lg">
							¿Ya tienes tu cuenta?{" "}
							<Link to="/auth/login">
								<span className="text-indigo-600 font-semibold cursor-pointer">
									Accedé.
								</span>
							</Link>
						</p>
						<button
							className="bg-indigo-600 w-full  p-2 text-white uppercase font-bold rounded-sm  
                            hover:bg-indigo-700 cursor-pointer transition-all"
							onClick={handleSubmit}
						>
							Crea tu cuenta
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
