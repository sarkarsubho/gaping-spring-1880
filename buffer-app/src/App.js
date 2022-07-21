import logo from "./logo.svg";
import "./App.css";
import { Container } from "@chakra-ui/react";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  return (
    <div className="App">
   <Container minWidth={'6xl'}>
    <MainRoutes/>
   </Container>
    </div>
  );
}

export default App;
