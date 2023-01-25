import "./Inicio.css";
import "animate.css";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ClipboardJS from "clipboard";
import Swal from 'sweetalert2'

const Inicio = () => {
  let estiloBoton = {
    textDecoration: "none",
    color: "white",
  };

  let estiloLinks = {
    color: "white",
    textDecoration: "none",
    paddingLeft: "1rem",
  };

  const correoCopiado = () => {
    Swal.fire({
      title: 'Correo Electronico Copiado',
      text: 'brunoo.roma@gmail.com',
      confirmButtonColor: '#053D74',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  useEffect(() => {
    new ClipboardJS(".copy-link");
  }, []);

  return (
    <div className="contenedorGralInicio">
      <Container>
        <Row className="row justify-content-center align-items-center">
          <Col className="col-12 col-sm-12 col-lg-8">
            <div>
              <div className="divInicio">
                <p className="textoInicio">
                  Hola, mi nombre es{" "}
                  <span className="spanInicio animate__animated animate__bounceIn animate__delay-0.6s">
                    Bruno Roma
                  </span>
                </p>
                <p className="textoInicio animate__animated animate__jackInTheBox animate__delay-1s">
                  Soy <span className="spanInicio">FrontEnd Developer</span>
                </p>
              </div>
              <Button variant="dark" size="lg" className="botonInicio boton">
                <NavLink to={`/sobremi`} style={estiloBoton}>
                  Mas sobre mi
                </NavLink>
              </Button>
            </div>
          </Col>
          <Col className="col-12 col-sm-12 col-lg-4">
            <div>
              <a
                href="https://www.linkedin.com/in/brunoroma11/"
                target="_blank"
                rel="noreferrer"
                style={estiloLinks}
              >
                <FontAwesomeIcon
                  className="contenedorRedes iconoLinkedin"
                  icon={faLinkedin}
                />
              </a>
              <a
                href="https://github.com/brunooroma"
                target="_blank"
                rel="noreferrer"
                style={estiloLinks}
              >
                <FontAwesomeIcon
                  className="contenedorRedes iconoGithub"
                  icon={faGithub}
                />
              </a>
              <a
                onClick={correoCopiado}
                href="#"
                className="copy-link"
                style={estiloLinks}
                data-clipboard-text="brunoo.roma@gmail.com"
              >
                <FontAwesomeIcon
                  className="contenedorRedes iconoEmail"
                  icon={faEnvelope}
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Inicio;
