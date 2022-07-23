import React from "react";
import { Routes ,Route} from "react-router-dom";
import { Home579 } from "./Home579";
import { Pricing579 } from "./Pricing579";

const MainRoutes = () => {
  return <div>
    <Routes>
      <Route path="/" element={<Home579></Home579>}> </Route>
      <Route path="/pricing" element={<Pricing579></Pricing579>}></Route>
    </Routes>
  </div>;
};

export default MainRoutes;
