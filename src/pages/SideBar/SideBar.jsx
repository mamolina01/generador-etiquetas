import React, { useContext } from "react";
import { StickerContext } from "../../context";
import { LargeScreen } from "./components/LargeScreen";
import { SmallScreen } from "./components/SmallScreen";

export const SideBar = () => {
	const { user, setLogout } =
		useContext(StickerContext);

	return (
		<>
			<SmallScreen user={user} setLogout={setLogout} />
			<LargeScreen user={user} setLogout={setLogout} />
		</>
	);
};
