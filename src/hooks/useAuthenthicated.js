import { useContext } from "react";
import { StickerContext } from "../context";
import Swal from "sweetalert2";

export const useAuthenthicated = () => {
	const { setUser, setProfile, setIsLogged, setLogout } =
		useContext(StickerContext);

	const startLogin = async ({ email, password }) => {
		try {
			const { data } = await stickerApi.post(`/auth`, { email, password });

			if (!data.ok) {
				return data.msg;
			}

			localStorage.setItem("token", data.token);
			localStorage.setItem("token-init-date", new Date().getTime());

			try {
				const { data: dataLogin } = await stickerApi.get(`/auth`, {
					email,
					password,
				});

				if (!dataLogin.ok) {
					setProfile({ name: data.name });
				} else {
					const { data } = dataLogin;
					setProfile(data);
				}
			} catch (error) {
				console.log(error);
				return error?.msg || "--";
			}
			const user = {
				email,
				id: data.uid,
			};
			setUser(user);
			setIsLogged(true);
		} catch (error) {
			console.log(error);
			return error?.msg || "--";
		}
	};

	const startRegister = async ({ name, email, password }) => {
		try {
			const { data } = await stickerApi.post(`/auth/register`, {
				name,
				email,
				password,
			});

			if (!data.ok) {
				return data.msg;
			}
			localStorage.setItem("token", data.token);
			localStorage.setItem("token-init-date", new Date().getTime());
			const user = {
				email,
				id: data.uid,
			};
			setUser(user);
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
      const { data: dataProfile } = await stickerApi.get(`/auth`, {
        email,
        password,
      });
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

	const updateProfile = async (sticker, id) => {
		const token = localStorage.getItem("token") ?? "";

		const { logo, instagram, whatsapp, name } = sticker;
		try {
			const response = await fetch(`http://localhost:4000/api/profile`, {
				method: "PUT",
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

			Swal.fire({
				icon: "success",
				title: "¡Perfil actualizado!",
				showConfirmButton: false,
				timer: 1500,
				returnFocus: false,
			});
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
		updateProfile,
	};
};
