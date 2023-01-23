import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { CardBody, CardTitle, CardText, CardImg } from "reactstrap";

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
                <Card className="my-2">
                  <CardImg
                    alt={proyecto.titulo}
                    src={proyecto.imagen}
                    style={{
                      height: "20rem",
                      width: "80%",
                      margin: "1rem",
                      border: "0.5rem solid black",
                    }}
                    top
                  />
                  <CardBody>
                    <CardTitle tag="h1"
                    style={{
                        fontWeight: 'bold'
                    }}>{proyecto.titulo}</CardTitle>
                    <a href={proyecto.url}
                    target='_blank'
                    rel="noreferrer"
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontSize: '1.2rem'
                    }}>
                      <CardText>{proyecto.url}</CardText>
                    </a>
                    <CardText>
                      <small className="descripcion">
                        Descripcion del proyecto
                      </small>
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
