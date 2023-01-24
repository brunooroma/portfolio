import "./SobreMi.css";
import { useState } from "react";
import fotoPerfil from "../../utils/img/FotoCV.jpg";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSquareJs,
  faReact,
  faAngular,
  faGitAlt,
  faGithub,
  faBootstrap,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SobreMi = ({ greeting }) => {
  let estiloLinks = {
    color: "black",
    textDecoration: "none",
    paddingLeft: "1rem",
  };

  const [show, setShow] = useState(false);

  return (
    <div
      className="text-center d-flex flex-column"
      style={{
        color: "white",
      }}
    >
      <h1>{greeting}</h1>
      <Container className="cardSobreMi">
        <Row className="row justify-content-center align-items-center">
          <Col className="col-12 col-sm-12 col-lg-6">
            <Card style={{ width: "80%", marginLeft: '2rem'}}>
              <Card.Img src={fotoPerfil} className="fotoSobreMi" />
            </Card>
          </Col>
          <Col className="col-12 col-sm-12 col-lg-6">
            <div className="divDescripcion">
              <p>
                Soy Desarrollador Frontend buscando experiencia en el desarrollo
                de aplicaciones web
              </p>
              <p>
                Manejo tecnologías como HTML, CSS, JavaScript, React, Angular,
                Git, GitHub y Bootstrap
              </p>
              <p>
                Me apasiona el desarrollo de aplicaciones web y siempre estoy
                buscando aprender y aplicar nuevas tecnologías
              </p>
              <p>
                Tengo muchas ganas de formar parte de un grupo de trabajo en
                donde tenga que enfrentarme a nuevos desafios y pueda aprender
                de desarrolladores con mas experiencia
              </p>
              <p>
                Me gustaria poder aportar soluciones a problemas reales que se
                presentan en el dia a dia
              </p>
            </div>
            <Button
              variant="dark"
              size="lg"
              className="boton botonSobreMi"
              onClick={() => setShow(true)}
            >
              Contactarme
            </Button>
            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Medios de Contacto
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <a
                    href="https://www.linkedin.com/in/brunoroma11/"
                    target="_blank"
                    style={estiloLinks}
                  >
                    <FontAwesomeIcon
                      className="contenedorRedesModal iconoLinkedin"
                      icon={faLinkedin}
                    />
                  </a>
                  <a
                    href="https://github.com/brunooroma"
                    target="_blank"
                    style={estiloLinks}
                  >
                    <FontAwesomeIcon
                      className="contenedorRedesModal iconoGithub"
                      icon={faGithub}
                    />
                  </a>
                  <a href="mailto:brunoo.roma@gmail.com" style={estiloLinks}>
                    <FontAwesomeIcon
                      className="contenedorRedesModal iconoEmail"
                      icon={faEnvelope}
                    />
                  </a>
                </div>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Container>

      <div
        className="text-center"
        style={{
          color: "white",
          marginBottom: "4rem",
        }}
      >
        <h1 className="m-5">Tecnologias</h1>
        <Container>
          <Row className="row">
            <Col className="col-12 col-sm-0 col-lg-1"></Col>
            <Col className="col-12 col-sm-0 col-lg-1"></Col>
            <Col className="col-6 col-sm-4 col-lg-1">
              <FontAwesomeIcon
                icon={faHtml5}
                className="logoTecnologia logoHtml"
              />
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
              <FontAwesomeIcon
                icon={faCss3}
                className="logoTecnologia logoCss"
              />
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
              <FontAwesomeIcon
                icon={faSquareJs}
                className="logoTecnologia logoJs"
              />
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
              <FontAwesomeIcon
                icon={faReact}
                className="logoTecnologia logoReact"
              />
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
              <FontAwesomeIcon
                icon={faAngular}
                className="logoTecnologia logoAngular"
              />
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
              <FontAwesomeIcon
                icon={faBootstrap}
                className="logoTecnologia logoBootstrap"
              />
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
              <FontAwesomeIcon
                icon={faGitAlt}
                className="logoTecnologia logoGit"
              />
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
              <FontAwesomeIcon
                icon={faGithub}
                className="logoTecnologia logoGithub"
              />
            </Col>
            <Col className="col-12 col-sm-0 col-lg-1"></Col>
            <Col className="col-12 col-sm-0 col-lg-1"></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SobreMi;
