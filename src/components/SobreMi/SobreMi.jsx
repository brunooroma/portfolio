import "./SobreMi.css";
import fotoPerfil from "../../utils/img/FotoCV.jpg";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faSquareJs, faReact, faAngular, faGitAlt, faGithub, faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";

const SobreMi = ({ greeting }) => {

  return (
    <div
      className="text-center d-flex flex-column"
      style={{
        color: "white",
      }}
    >
        <h1>{greeting}</h1>
        <Container className="card">
          <Row className="row justify-content-center align-items-center">
            <Col className="col-12 col-sm-12 col-lg-6 ">
              <Card style={{ width: "100%" }}>
                <Card.Img src={fotoPerfil} />
              </Card>
            </Col>
            <Col className="col-12 col-sm-12 col-lg-6">
              <div className="divDescripcion">
                <p>
                  En este último tiempo, me propuse retomar el camino de la
                  programación, un rubro que siempre me gusto. Habiendo
                  finalizado la carrera de Desarrollador Frontend JS React, mi
                  objetivo laboral es incursionar en el mundo de la programación
                  desde un lugar más protagonista aplicando las habilidades
                  aprendidas estos años
                </p>
                <p>
                  Me gustaria poder aportar soluciones digitales a problemas
                  reales que se presentan en el dia a dia
                </p>
              </div>
              <Button variant="dark" size="lg" className="boton">
                Contactarme
              </Button>
            </Col>
          </Row>
        </Container>

      <div
        className="text-center"
        style={{
          color: "white",
          marginBottom: '4rem'
        }}
      >
        <h1 className="m-5">Tecnologias</h1>
        <Container>
          <Row className="row">
          <Col className="col-12 col-sm-0 col-lg-1">
            
            </Col>
            <Col className="col-12 col-sm-0 col-lg-1">
           
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
            <FontAwesomeIcon icon={faHtml5} className="logoTecnologia logoHtml" />
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
            <FontAwesomeIcon icon={faCss3} className="logoTecnologia logoCss" />
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
            <FontAwesomeIcon icon={faSquareJs} className="logoTecnologia logoJs" />
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
            <FontAwesomeIcon icon={faReact} className="logoTecnologia logoReact" />
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
            <FontAwesomeIcon icon={faAngular} className="logoTecnologia logoAngular" />
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
            <FontAwesomeIcon icon={faBootstrap} className="logoTecnologia logoBootstrap" />
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
            <FontAwesomeIcon icon={faGitAlt} className="logoTecnologia logoGit" />
            </Col>
            <Col className="col-6 col-sm-4 col-lg-1">
            <FontAwesomeIcon icon={faGithub} className="logoTecnologia logoGithub" />
            </Col>
            <Col className="col-12 col-sm-0 col-lg-1">
            
            </Col>
            <Col className="col-12 col-sm-0 col-lg-1">
           
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SobreMi;
