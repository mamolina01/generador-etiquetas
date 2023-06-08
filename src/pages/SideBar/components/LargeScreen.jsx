import React from "react";
import { Link, useLocation } from "react-router-dom";

export const LargeScreen = ({ user, setLogout }) => {
	const location = useLocation().pathname;

	return (
		<div className="h-screen w-max bg-zinc-800 hidden lg:flex flex-col justify-between text-slate-100 font-bold text-center text-lg">
			<div>
				<div className="mt-24">
					<Link to="/">
						<img
							src={user.logo}
							alt="logo-marca"
							className=" w-20 h-20 mx-auto rounded-full"
						/>
					</Link>
				</div>
				<p className="mt-2 mb-5 capitalize">{user.nombre}</p>
				<Link to="/">
					<p
						className={`p-3 cursor-pointer border-y-2 border-zinc-500 whitespace-nowrap transition-all hover:bg-zinc-700 ${
							location === "/" ? "bg-zinc-700" : ""
						}`}
					>
						Mis Etiquetas
					</p>
				</Link>
				<Link to="/generate">
					<p
						className={`p-3 cursor-pointer border-b-2 border-zinc-500 whitespace-nowrap transition-all hover:bg-zinc-700 ${
							location === "/generate" ? "bg-zinc-700" : ""
						}`}
					>
						Diseña tu Etiqueta
					</p>
				</Link>
			</div>
			<div>
				<p
					className="p-3 cursor-pointer border-y-2 my-2 border-zinc-500 whitespace-nowrap transition-all hover:bg-zinc-700"
					onClick={() => setLogout()}
				>
					Salir
				</p>
			</div>
		</div>
	);
};
