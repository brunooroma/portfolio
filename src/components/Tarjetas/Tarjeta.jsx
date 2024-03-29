import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { CardBody, CardTitle, CardText, CardImg } from "reactstrap";
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
    <Container fluid="md" className="contenedorPrueba">
      {chunks.map((chunk, idx) => (
        <Row key={idx} className="justify-content-md-center">
          {chunk.map((proyecto) => (
            <Col key={proyecto.id} sm={6}>
              <div className="mb-3 text-center">
              <a
                        href={proyecto.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          textDecoration: 'none',
                          color: 'white',
                        }}
                      >
                <Card className="contenedorTarjeta">
                
                  <CardImg
                    alt={proyecto.titulo}
                    src={proyecto.imagen}
                    style={{
                      height: "15rem",
                      width: "80%",
                      margin: "1rem",
                      border: "2px solid white",
                    }}
                    className='imagenRedireccion'
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

                  </CardBody>
                </Card>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Tarjeta;
