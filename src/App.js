import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ContainerGral from "./components/ContainerGral/ContainerGral";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ContainerGral greeting={'Bienvenidos'}/>} />
          <Route path="/sobremi" element={<ContainerGral greeting={'Sobre Mi'} />} />
          <Route path="/proyectos" element={<ContainerGral greeting={'Proyectos'}/>} />
          <Route path="/contacto" element={<ContainerGral greeting={'Contacto'}/>} />
          <Route path="*" element={<h1>Pagina No Encontrada</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
