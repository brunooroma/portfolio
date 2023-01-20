import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Inicio from "./components/Inicio/Inicio";
import SobreMi from "./components/SobreMi/SobreMi";
import Proyectos from "./components/Portfolio/Portfolio";
import Contacto from "./components/Contacto/Contacto";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Inicio greeting={"Mi Portfolio"} />} />
            <Route
              path="/sobremi"
              element={<SobreMi greeting={"Sobre Mi"} />}
            />
            <Route
              path="/portfolio"
              element={<Proyectos greeting={"Portfolio"} />}
            />
            <Route
              path="/contacto"
              element={<Contacto greeting={"Contacto"} />}
            />
            <Route path="*" element={<h1>Pagina No Encontrada</h1>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
