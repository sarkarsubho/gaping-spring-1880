import "./App.css";
import { Navbar } from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import { Container } from "@chakra-ui/react";
import { Pricing579 } from "./Pages/Pricing579";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Container maxW={["100%", "100%", "100%", "85%"]} >
        <Navbar></Navbar>
        <MainRoutes></MainRoutes>
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default App;
