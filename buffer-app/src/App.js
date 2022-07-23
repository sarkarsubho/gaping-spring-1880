
import "./App.css";

import { Navbar } from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import { Container } from "@chakra-ui/react";
import { Footer } from "./Components/Footer";





function App() {
  return (
    <div className="App">

     
        <Navbar></Navbar>
        <MainRoutes></MainRoutes>
        <Footer></Footer>
     


    </div>
  );
}

export default App;
