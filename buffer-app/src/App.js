import "./App.css";
import { Navbar } from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Container maxW={["97%", "97%", "80%", "75%"]}>
        <Navbar></Navbar>
        <MainRoutes></MainRoutes>
        
      </Container>
    </div>
  );
}

export default App;
