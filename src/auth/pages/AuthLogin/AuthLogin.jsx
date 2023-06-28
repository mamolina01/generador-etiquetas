import React from "react";
import { useState } from "react";
import { useAuthenthicated, useForm } from "../../../hooks";
import { Link } from "react-router-dom";

export const AuthLogin = () => {
	const [error, setError] = useState(false);
	const { startLogin } = useAuthenthicated();

	const { formState, isFormValid, onInputChange, setFormState, resetForm } =
		useForm({
			email: "",
			password: "",
		});

	const handleSubmit = async () => {
		const validation = isFormValid();
		if (!validation) {
			setError("COMPLETA TODOS LOS CAMPOS");
			return;
		}

		const message = await startLogin(formState);
		setError(message);

	};
	return (
		<>
			<div className="w-full mx-auto p-5 mt-5 flex flex-col gap-2 bg-white rounded-md shadow-md shadow-stone-400">
				<h3 className="text-center  font-semibold text-indigo-600 text-2xl">
					Ingresá tus datos
				</h3>
				{error && (
					<p className="w-full text-center bg-red-500 text-white font-bold p-2 mt-2 uppercase">
						{error}
					</p>
				)}
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
						placeholder="Email de tu cuenta"
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
						placeholder="Contraseña de tu cuenta"
						value={formState.password}
						onChange={(e) => onInputChange(e)}
						className="border-b-2 rounded-none border-zinc-300 w-full py-1 placeholder-zinc-600 text-sm outline-none"
					/>
				</div>

				<p className="text-center p-2 mt-1 text-lg">
					¿Todavía no tenés tu cuenta?{" "}
					<Link to="/auth/register">
						<span className="text-indigo-600 font-semibold cursor-pointer">
							Registrate.
						</span>
					</Link>
				</p>
				<button
					className="bg-indigo-600 w-full  p-2 text-white uppercase font-bold rounded-sm  
                            hover:bg-indigo-700 cursor-pointer transition-all"
					onClick={handleSubmit}
				>
					Ingresar
				</button>
			</div>
		</>
	);
};
