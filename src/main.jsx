import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StickerProvider } from "./context/StickerProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StickerProvider>
      <App />
    </StickerProvider>
  </React.StrictMode>
);
