import { useContext } from "react";
import { useEffect } from "react";
import { StickerContext } from "../context";

export const useAuthenthicated = () => {
	const { setUser, setProfile, setIsLogged, setLogout } =
		useContext(StickerContext);

	const startLogin = async ({ email, password }) => {
		try {
			const responseLogin = await fetch("http://localhost:4000/api/auth", {
				method: "POST",
				body: JSON.stringify({ email, password }),
				headers: { "Content-type": "application/json; charset=UTF-8" },
			})
				.then((response) => response.json())
				.then((json) => json);

			if (!responseLogin.ok) {
				return responseLogin.msg;
			}

			localStorage.setItem("token", responseLogin.token);
			localStorage.setItem("token-init-date", new Date().getTime());

			try {
				const dataProfile = await fetch("http://localhost:4000/api/profile", {
					headers: { "x-token": responseLogin.token },
				})
					.then((response) => response.json())
					.then((json) => json);

				if (!dataProfile.ok) {
					setProfile({ name: responseLogin.name });
				} else {
					const { data } = dataProfile;
					setProfile(data);
				}
			} catch (error) {
				console.log(error);
				return error?.msg || "--";
			}
			setUser({ email });
			setIsLogged(true);
		} catch (error) {
			console.log(error);
			return error?.msg || "--";
		}
	};

	const startRegister = async ({ name, email, password }) => {
		try {
			const data = await fetch("http://localhost:4000/api/auth/register", {
				method: "POST",
				body: JSON.stringify({ name, email, password }),
				headers: { "Content-type": "application/json; charset=UTF-8" },
			})
				.then((response) => response.json())
				.then((json) => json);

			if (!data.ok) {
				return data.msg;
			}
			localStorage.setItem("token", data.token);
			localStorage.setItem("token-init-date", new Date().getTime());
			setUser({ email });
			setProfile({ name });
			setIsLogged(true);
			return false;
		} catch (error) {
			console.log(error);
			return error?.msg || "--";
		}
	};

	const startSetProfile = async ({ logo, instagram, whatsapp, name }) => {
		const token = localStorage.getItem("token") ?? "";
		try {
			const response = await fetch("http://localhost:4000/api/profile", {
				method: "POST",
				body: JSON.stringify({ name, logo, instagram, whatsapp }),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
					"x-token": token,
				},
			})
				.then((response) => response.json())
				.then((json) => json);

			if (!response.ok) {
				return response.msg;
			}
			setProfile(response.data);
			return false;
		} catch (error) {
			console.log(error);
			return error?.msg || "--";
		}
	};

	return {
		startLogin,
		startRegister,
		startSetProfile,
	};
};
