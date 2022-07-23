import React from "react";
import { Routes, Route } from "react-router-dom";
import EngagementPage from "./EngagementPage";
import StartPage from "./StartPage";
import { Home579 } from "./Home579";
import { Pricing579 } from "./Pricing579";
import Login from "./Login";
import Signup from "./Signup";
import { Center, Container } from "@chakra-ui/react";
import AnalyzePage from "./AnalyzePage";
import PublishPage from "./PublishPage";
import AboutUs from "./AboutUs";
import Customer from "./Customer";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home579></Home579>}>
          {" "}
        </Route>
        <Route
          path="/pricing"
          element={
            <Container maxW={["100%", "100%", "100%", "100%"]}>
              <Center>
                <Pricing579></Pricing579>
              </Center>
            </Container>
          }
        ></Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/startpage" element={<StartPage />} />
        <Route path="/engagepage" element={<EngagementPage />} />
        <Route path="/publish" element={<PublishPage />} />
        <Route path="/analyze" element={<AnalyzePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Customer" element={<Customer />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
