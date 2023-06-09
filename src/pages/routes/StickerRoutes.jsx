import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { StickerGenerator, StickerList } from "../";
import { SideBar } from "../SideBar";

export const StickerRoutes = () => {
  return (
      <div className="flex flex-col md:flex-row">
        <SideBar />
        <Routes>
          <Route path="/" element={<StickerList />} />
          <Route path="/generate/:stickerId?" element={<StickerGenerator />} />

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
  );
};
