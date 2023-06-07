import React from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { StickerSettings } from "../pages";

export const AuthRoutes = () => {

  return (
      <div className="flex">
        <Routes>
          <Route path="settings" element={<StickerSettings />} />
          <Route path="/*" element={<Navigate to="/auth/settings" />} />
        </Routes>
      </div>
  );
};
