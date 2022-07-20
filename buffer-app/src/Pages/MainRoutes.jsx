import React from "react";
import PublishPage from "./PublishPage";
import {Route,Routes} from "react-router-dom"
import AnalyzePage from "./AnalyzePage";
const MainRoutes = () => {
  return (
  <Routes>
    <Route path="/publish" element={<PublishPage/>}/>
    <Route path="/analyze" element={<AnalyzePage/>}/>
  </Routes>
    );
};

export default MainRoutes;
