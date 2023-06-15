import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
// import { StickerGenerator, StickerList, StickerSettings } from "../pages";
// import { SideBar } from "../components/SideBar";
import { useContext } from "react";
import { StickerContext } from "../context";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { StickerRoutes } from "../pages/routes/StickerRoutes";
import { useManageStickers } from "../hooks";
import { useEffect } from "react";

export const MyRoutes = () => {
	const { isLogged } = useContext(StickerContext);
	const { getStickers } = useManageStickers();

	useEffect(() => {
		getStickers();
	}, []);

	return (
		<Router>
			<Routes>
				{isLogged ? (
					<Route exact path="/*" element={<StickerRoutes />} />
				) : (
					<Route path="/auth/*" element={<AuthRoutes />} />
				)}
				<Route path="/*" element={<Navigate to="/auth/settings" />} />
			</Routes>
		</Router>
	);
};
