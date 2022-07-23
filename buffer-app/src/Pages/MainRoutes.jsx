import React from "react";

import { Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Customer from "./Customer"

const MainRoutes = () => {
  return (
    <div>
      <Routes></Routes>
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Customer" element={<Customer />} />
    </div>
  );
};

export default MainRoutes;
