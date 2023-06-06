import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { StickerGenerator, StickerList } from "../pages";
import { SideBar } from "../components/SideBar";

export const MyRoutes = () => {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<StickerList />} />
          <Route exact path="/generate" element={<StickerGenerator />} />

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      {/* <Routes>
        <Route exact path="/" element={<StickerList />} />
        <Route exact path="/generate" element={<StickerGenerator />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes> */}
    </Router>
  );
};
