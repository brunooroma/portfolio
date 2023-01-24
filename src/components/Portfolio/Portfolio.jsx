import Tarjeta from '../Tarjetas/Tarjeta'
import './Portfolio.css'
import React, { useState, useEffect } from 'react';
import dataProyectos from '../Data/data.js'
import { Container } from 'react-bootstrap';

const Portfolio = ({greeting}) => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
      setProyectos(dataProyectos);
  }, []);

  return (
    <Container>
      <div><h1>{greeting}</h1>
      </div>
    <Tarjeta info={proyectos}/>
    </Container>
  );
}

export default Portfolio