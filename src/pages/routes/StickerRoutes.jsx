import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { StickerGenerator, StickerList, StickerProfile } from "../";
import { SideBar } from "../SideBar";
import { validateFiles } from "../../helpers";
import { useContext } from "react";
import { StickerContext } from "../../context";

export const StickerRoutes = () => {
	const { profile } = useContext(StickerContext);

	console.log(validateFiles(profile));

	return (
		<div className="flex flex-col md:flex-row">
			{validateFiles(profile) ? (
				<>
					<SideBar />
					<Routes>
						<Route path="/" element={<StickerList />} />
						<Route
							path="/generate/:stickerId?"
							element={<StickerGenerator />}
						/>
            
						<Route path="/*" element={<Navigate to="/" />} />
					</Routes>
				</>
			) : (
				<>
					<Routes>
						<Route path="/profile" element={<StickerProfile />} />

						<Route path="/*" element={<Navigate to="/profile" />} />
					</Routes>
				</>
			)}
		</div>
	);
};
