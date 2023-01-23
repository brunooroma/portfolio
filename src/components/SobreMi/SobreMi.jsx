import "./SobreMi.css";
import fotoPerfil from "../../utils/img/FotoCV.jpg";
import { Card, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

const SobreMi = ({ greeting }) => {
  let estiloBoton = {
    textDecoration: "none",
    color: "white",
  };

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
                <Button variant="dark" size="lg">
                  <NavLink to={`/contacto`} style={estiloBoton}>
                    Contactarme
                  </NavLink>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

      <div
        className="text-center"
        style={{
          color: "white",
        }}
      >
        <h2 className="mt-5">Tecnologias</h2>
        <Container>
          <Row className="row mb-2">
            <Col>
              <img
                src="/static/logoHTML.png"
                alt="Logo HTML5"
                className="col-sm-6 col-md-6 col-lg-6 col-xl-6 logos"
              />
            </Col>
            <Col>
              <img
                src="/static/logoCSS.png"
                alt="Logo CCS3"
                className="col-sm-6 col-md-6 col-lg-6 col-xl-6 logos"
              />
            </Col>
          </Row>
          <Row className="row mb-2">
            <Col>
              <img
                src="/static/logoJS.png"
                alt="Logo JS"
                className="col-sm-6 col-md-6 col-lg-6 col-xl-6 logos"
              />
            </Col>
            <Col>
              <img
                src="/static/logoReact.jpg"
                alt="Logo React"
                className="col-sm-6 col-md-6 col-lg-6 col-xl-6 logos"
              />
            </Col>
          </Row>
          <Row className="row mb-2">
            <Col>
              <img
                src="/static/logoAngular.png"
                alt="Logo Angular"
                className="col-sm-6 col-md-6 col-lg-6 col-xl-6 logos"
              />
            </Col>
            <Col>
              <img
                src="/static/logoBootstrap.png"
                alt="Logo Bootstrap"
                className="col-sm-6 col-md-6 col-lg-6 col-xl-6 logos"
              />
            </Col>
          </Row>
          <Row className="row mb-2">
            <Col>
              <img
                src="/static/logoGit.png"
                alt="Logo Git"
                className="col-sm-6 col-md-6 col-lg-6 col-xl-6 logos"
              />
            </Col>
            <Col>
              <img
                src="/static/logoGithub.png"
                alt="Logo Github"
                className="col-sm-6 col-md-6 col-lg-6 col-xl-6 logos"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SobreMi;
