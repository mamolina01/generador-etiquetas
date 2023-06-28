import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLogin, AuthRegister } from "../pages";

export const AuthRoutes = () => {
	return (
		<div className=" w-full h-screen max-h-screen overflow-auto scroll-auto">
			<div className="flex flex-col  justify-center mx-auto w-11/12 md:w-1/2 animate__animated animate__fadeIn animate__faster">
				<h1 className="text-center text-indigo-700 font-bold text-3xl p-2 mt-5 uppercase">
					Generador de Etiquetas
				</h1>
				<Routes>
					<Route path="/login" element={<AuthLogin />} />
					<Route path="/register" element={<AuthRegister />} />
					<Route path="/*" element={<Navigate to="/auth/login" />} />
				</Routes>
			</div>
		</div>
	);
};
