import { useContext } from "react";
import { useEffect } from "react";
import { StickerContext } from "../context";

export const useAuthenthicated = () => {
	const { setUser, setProfile, setIsLogged } = useContext(StickerContext);

	const startLogin = async ({ email, password }) => {};

	const startRegister = async ({ name, email, password }) => {
		try {
			const { data } = await calendarApi.post(
				"http://localhost:4000/api/auth/register",
				{
					name,
					email,
					password,
				}
			);
			localStorage.setItem("token", data.token);
			localStorage.setItem("token-init-date", new Date().getTime());
			setUser({ email });
			setProfile({ name });
			setIsLogged(true);
		} catch (error) {
			return error.response.data?.msg || "--";
		}
	};

	return {
		startLogin,
		startRegister,
	};
};
