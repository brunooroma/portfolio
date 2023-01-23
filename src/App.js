import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Inicio from "./components/Inicio/Inicio";
import SobreMi from "./components/SobreMi/SobreMi";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route
              path="/sobremi"
              element={<SobreMi greeting={"Sobre Mi"} />}
            />
            <Route
              path="/portfolio"
              element={<Portfolio greeting={"Portfolio"} />}
            />
            <Route path="*" element={<h1>Pagina No Encontrada</h1>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
