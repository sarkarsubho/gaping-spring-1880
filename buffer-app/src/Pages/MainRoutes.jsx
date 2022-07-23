import React from "react"
import { Routes ,Route} from "react-router-dom";
import EngagementPage from "./EngagementPage";
import StartPage from "./StartPage";
import { Home579 } from "./Home579";
import { Pricing579 } from "./Pricing579";
import Login from "./Login"
import Signup from "./Signup"
import { Center } from "@chakra-ui/react";


const MainRoutes = () => {
  return <div>
    <Routes>

      <Route path="/" element={<Home579></Home579>}> </Route>
      <Route path="/pricing" element={<Center><Pricing579></Pricing579></Center>}></Route>

      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/startpage" element={<StartPage />} />
        <Route path="/engagepage" element={<EngagementPage />} />

    </Routes>
  </div>;

};

export default MainRoutes;
