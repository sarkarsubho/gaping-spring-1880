import React from "react";
import { Routes ,Route} from "react-router-dom";
import { Home579 } from "./Home579";

const MainRoutes = () => {
  return <div>
    <Routes>
      <Route path="/" element={<Home579></Home579>}> </Route>
    </Routes>
  </div>;
};

export default MainRoutes;
