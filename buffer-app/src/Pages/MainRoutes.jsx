import React from "react";
import { Route, Routes } from "react-router-dom";
import EngagementPage from "./EngagementPage";
import StartPage from "./StartPage";
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/startpage" element={<StartPage />} />
        <Route path="/engagepage" element={<EngagementPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
