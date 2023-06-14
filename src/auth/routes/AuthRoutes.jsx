import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLogin, AuthRegister } from "../pages";

export const AuthRoutes = () => {
	return (
		<div className="flex">
			<Routes>
				<Route path="/login" element={<AuthLogin />} />
				<Route path="/register" element={<AuthRegister />} />
				<Route path="/*" element={<Navigate to="/auth/login" />} />
			</Routes>
		</div>
	);
};
