import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import { faSquareUpRight } from "@fortawesome/free-solid-svg-icons";
import './Tarjeta.css'

const Tarjeta = ({ info }) => {
  const chunk = (arr, size) => {
    const chunkedArr = [];
    let i = 0;
    while (i < arr.length) {
      chunkedArr.push(arr.slice(i, i + size));
      i += size;
    }
    return chunkedArr;
  };

  console.log(info.imagen);

  const chunks = chunk(info, 2);

  return (
    <Container fluid="md">
      {chunks.map((chunk, idx) => (
        <Row key={idx} className="justify-content-md-center">
          {chunk.map((proyecto) => (
            <Col key={proyecto.id} sm={6}>
              <div className="mb-3 text-center">
                <Card className="my-2 contenedorTarjeta">
                  <CardImg
                    alt={proyecto.titulo}
                    src={proyecto.imagen}
                    style={{
                      height: "20rem",
                      width: "80%",
                      margin: "1rem",
                      border: "0.2rem solid black",
                    }}
                  />
                  <CardBody>
                    <CardTitle
                      tag="h3"
                      style={{
                        fontWeight: "bold"
                      }}
                    >
                      {proyecto.titulo}
                    </CardTitle>
                    <CardText
                    style={{
                      fontSize: '1.2rem'
                    }}>
                      <small>
                        {proyecto.descripcion}
                      </small>
                    </CardText>
                    <CardText>
                      <a
                        href={proyecto.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          textDecoration: 'none',
                          color: 'white',
                          fontSize: '2rem'
                        }}
                      >
                        <FontAwesomeIcon
                        className="logoRedireccion"
                          icon={faSquareUpRight}
                        />
                      </a>
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Tarjeta;
