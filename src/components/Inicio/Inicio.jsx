import { Button, Col, Container, Row } from "react-bootstrap";
import fondo from "../../utils/img/fondoInicio.jpg";
import "./Inicio.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Inicio = () => {
  let estiloBoton = {
    textDecoration: "none",
    color: "white",
  };

  let estiloLinks = {
    color: 'white',
    textDecoration: "none",
  }

  return (
    
      
        <div
          className="contenedorGralInicio"
          style={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
            height: "95vh",
          }}
        >
          <Container >
          <Row className="row justify-content-center align-items-center">
          <Col className="col-12 col-sm-12 col-lg-8">
            <div>
              <div className="divInicio">
                <p className="textoInicio">
                  Hola, mi nombre es{" "}
                  <span className="spanInicio">Bruno Roma</span>
                </p>
                <p className="textoInicio">
                  <span className="spanInicio">Soy</span> FrontEnd Developer
                </p>
              </div>

              <Button variant="dark" size="lg" className="botonInicio">
                <NavLink to={`/sobremi`} style={estiloBoton}>
                  Mas sobre mi
                </NavLink>
              </Button>
            </div>
          </Col>
          <Col className="col-12 col-sm-12 col-lg-4">
            <div>
              <a href="https://www.linkedin.com/in/brunoroma11/" target='_blank' style={estiloLinks}><FontAwesomeIcon className="contenedorRedes iconoLinkedin" icon={faLinkedin} /></a>
              <a href="https://github.com/brunooroma" target='_blank' style={estiloLinks}><FontAwesomeIcon className="contenedorRedes iconoGithub" icon={faGithub} /></a>
              <a href="mailto:brunoo.roma@gmail.com" style={estiloLinks}><FontAwesomeIcon className="contenedorRedes iconoEmail" icon={faEnvelope} /></a>
            </div>
          </Col>
          </Row>
    </Container>
        </div>

  );
};

export default Inicio;
