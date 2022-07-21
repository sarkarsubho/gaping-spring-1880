import "./App.css";
import { Navbar } from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Container maxW={["100%", "100%", "100%", "75%"]} >
        <Navbar></Navbar>
        <MainRoutes></MainRoutes>

      </Container>
    </div>
  );
}

export default App;
