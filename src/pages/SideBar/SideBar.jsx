import React, { useContext } from "react";
import { StickerContext } from "../../context";
import { LargeScreen } from "./components/LargeScreen";
import { SmallScreen } from "./components/SmallScreen";
import Swal from "sweetalert2";

export const SideBar = () => {
	const { profile, setLogout } = useContext(StickerContext);

	const Logout = () => {
		Swal.fire({
			title: "¿Desea cerrar sesión?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#4F46E5",
			cancelButtonColor: "#EF4444",
			confirmButtonText: "Si, salir",
			cancelButtonText: "Cancelar",
		}).then((result) => {
			if (result.isConfirmed) {
				setLogout();
			}
		});
	};
	return (
		<>
			<SmallScreen profile={profile} setLogout={Logout} />
			<LargeScreen profile={profile} setLogout={Logout} />
		</>
	);
};
