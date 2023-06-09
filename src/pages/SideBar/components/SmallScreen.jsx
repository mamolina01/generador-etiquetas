import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

export const SmallScreen = ({ user, setLogout }) => {
	const [showMenu, setShowMenu] = useState(false);
	const location = useLocation().pathname;

	return (
		<>
			<div className="w-full sticky bg-zinc-800 p-2 z-20 flex lg:hidden justify-between items-center">
				<div onClick={() => setShowMenu(!showMenu)}>
					<AiOutlineMenu className="text-white text-3xl " />
				</div>
				<h1 className="uppercase text-white text-xl font-semibold">
					{user.nombre}
				</h1>
			</div>

			<div
				className={` ${
					showMenu ? " absolute" : "hidden"
				} w-full top-12 bg-zinc-800 p-2 
				gap-2 z-20 flex flex-col lg:hidden justify-between items-center`}
			>
				<img
					src={user.logo}
					alt="logo-marca"
					className=" w-20 h-20 mx-auto object-cover rounded-full"
				/>
				<div
					className={`text-white w-full font-semibold p-2 text-xl
						${location === "/" ? "bg-zinc-700" : ""} hover:bg-zinc-700 w-full text-center`}
				>
					<Link to="/">
						<button className="w-full" onClick={() => setShowMenu(false)}>
							Mis Etiquetas
						</button>
					</Link>
				</div>
				<div
					className={`text-white w-full font-semibold p-2 text-xl
						${
							location === "/generate" ? "bg-zinc-700" : ""
						} hover:bg-zinc-700 w-full text-center`}
				>
					<Link to="/generate">
						<button className="w-full" onClick={() => setShowMenu(false)}>
							Generar Etiqueta
						</button>
					</Link>
				</div>

				<div className="text-white w-full font-semibold p-2 text-xl hover:bg-zinc-600 text-center">
					<button
						className="w-full"
						onClick={() => {
							` ${(setShowMenu(false), setLogout())}`;
						}}
					>
						Salir
					</button>
				</div>
			</div>

			<div
				onClick={() => setShowMenu(false)}
				className={`${
					showMenu ? "absolute" : "hidden"
				} left-0 top-0 z-10 bg-black opacity-50 lg:hidden h-screen w-full`}
			></div>
		</>
	);
};
