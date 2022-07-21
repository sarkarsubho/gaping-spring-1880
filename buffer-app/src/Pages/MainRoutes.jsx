import React from "react";
import { Routes ,Route} from "react-router-dom";
import Login from "./Login"
import Signup from "./Signup"

const MainRoutes = () => {
  return <div>
    <Routes>
      <Route/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  </div>;
};

export default MainRoutes;
