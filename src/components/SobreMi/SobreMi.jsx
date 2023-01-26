import "./SobreMi.css";
import { useState, useEffect } from "react";
import fotoPerfil from "../../utils/img/fotoSobreMi.jpeg";
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
  faNodeJs,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ClipboardJS from "clipboard";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const SobreMi = ({ greeting }) => {
  let estiloBoton = {
    textDecoration: "none",
    color: "white",
  };

  let estiloLinks = {
    color: "black",
    textDecoration: "none",
    paddingLeft: "1rem",
  };

  const [show, setShow] = useState(false);

  const correoCopiado = () => {
    Swal.fire({
      title: "Correo Electronico Copiado",
      text: "brunoo.roma@gmail.com",
      confirmButtonColor: "#053D74",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  useEffect(() => {
    new ClipboardJS(".copy-link");
  }, []);

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
            <Card.Img src={fotoPerfil} className="fotoSobreMi" />
          </Col>
          <Col className="col-12 col-sm-12 col-lg-6">
            <div className="divDescripcion">
              <p>Hola! Soy Bruno, un gusto que hayas llegado a mi portfolio!</p>
              <p>
                Espero que el próximo extracto te ayude a conocerme un poco mas
                y a entender mi objetivo actual
              </p>
              <p>
                Tengo más de 10 años de experiencia en el campo laboral, de los
                cuales los últimos años han sido relacionados al rubro de
                sistemas. Actualmente, estoy buscando mi primer trabajo como
                desarrollador front-end, de preferencia React pero esto no es excluyente
              </p>
              <p>
                Mi experiencia como analista funcional me ha dado una
                comprensión sólida de las metodologías ágiles, utilizando
                herramientas como Trello, OsTicket o Jira para la organización
                de tareas{" "}
              </p>
              <p>
                Sobre mi stack tecnológico te puedo comentar que es HTML, CSS,
                JavaScript, React, Angular, Git (GitHub) y obviamente no puede
                faltar nuestro amigo Bootstrap, todo esto lo aprendí tanto con
                los cursos realizados en CoderHouse como tambien con
                capacitaciones de forma autodidacta
              </p>
              <p>
                Mi experiencia en el desarrollo de páginas web no solo es como
                front-end, sino que también tengo nociones de backend y estoy
                dispuesto a aprender más aun
              </p>
              <p>
                Estoy seguro de que el equipo de desarrollo que me de esa
                oportunidad que busco no se va a arrepentir, ya que estoy con
                muchas ganas y muy emocionado de poder aplicar mi experiencia y
                mis habilidades en mi próximo desafio profesional, como asi
                tambien aprender de ellos cosas nuevas y a mejorar lo que ya se
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
                <NavLink to={`/proyectos`} style={estiloBoton}>
                <Button variant="dark" size="lg" className="boton botonSobreMi">
                  Mis Proyectos
                  </Button>
                </NavLink>
              
            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  <h2
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Medios de Contacto
                  </h2>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <a
                    href="https://www.linkedin.com/in/brunoroma11/"
                    target="_blank"
                    rel="noreferrer"
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
                    rel="noreferrer"
                    style={estiloLinks}
                  >
                    <FontAwesomeIcon
                      className="contenedorRedesModal iconoGithub"
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
            <Col className="col-6 col-sm-4 col-lg-1">
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-bottom">
                    <strong>HTML5</strong>
                  </Tooltip>
                }
              >
                <FontAwesomeIcon
                  icon={faHtml5}
                  className="logoTecnologia logoHtml"
                />
              </OverlayTrigger>
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-bottom">
                    <strong>CSS3</strong>
                  </Tooltip>
                }
              >
                <FontAwesomeIcon
                  icon={faCss3}
                  className="logoTecnologia logoCss"
                />
              </OverlayTrigger>
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-bottom">
                    <strong>Javascript</strong>
                  </Tooltip>
                }
              >
                <FontAwesomeIcon
                  icon={faSquareJs}
                  className="logoTecnologia logoJs"
                />
              </OverlayTrigger>
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-bottom">
                    <strong>React</strong>
                  </Tooltip>
                }
              >
                <FontAwesomeIcon
                  icon={faReact}
                  className="logoTecnologia logoReact"
                />
              </OverlayTrigger>
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-bottom">
                    <strong>Angular</strong>
                  </Tooltip>
                }
              >
                <FontAwesomeIcon
                  icon={faAngular}
                  className="logoTecnologia logoAngular"
                />
              </OverlayTrigger>
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-bottom">
                    <strong>Bootstrap</strong>
                  </Tooltip>
                }
              >
                <FontAwesomeIcon
                  icon={faBootstrap}
                  className="logoTecnologia logoBootstrap"
                />
              </OverlayTrigger>
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-bottom">
                    <strong>Git</strong>
                  </Tooltip>
                }
              >
                <FontAwesomeIcon
                  icon={faGitAlt}
                  className="logoTecnologia logoGit"
                />
              </OverlayTrigger>
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-bottom">
                    <strong>Github</strong>
                  </Tooltip>
                }
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="logoTecnologia logoGithub"
                />
              </OverlayTrigger>
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-bottom">
                    <strong>NodeJS</strong>
                  </Tooltip>
                }
              >
                <FontAwesomeIcon
                  icon={faNodeJs}
                  className="logoTecnologia logoNodeJS"
                />
              </OverlayTrigger>
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-bottom">
                    <strong>Sass</strong>
                  </Tooltip>
                }
              >
                <FontAwesomeIcon
                  icon={faSass}
                  className="logoTecnologia logoSass"
                />
              </OverlayTrigger>
            </Col>
            <Col className="col-12 col-sm-0 col-lg-1"></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SobreMi;
