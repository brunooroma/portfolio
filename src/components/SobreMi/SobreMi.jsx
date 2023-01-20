import './SobreMi.css'
import fotoPerfil from '../../utils/img/FotoCV.jpg'
import { Card } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const SobreMi = ({greeting}) => {

    let estiloBoton = {
        textDecoration: "none",
        color: 'white'
      };

  return (
    <div className='contenedorSobreMi'>
        <h1>{greeting}</h1>
        <div className='divSobreMi card'>
            <div>
            <Card style={{ width: '20rem' }}>
                <Card.Img className='imagen' src={fotoPerfil} />
            </Card>
            </div>
            <div className='divDescripcion'>
            <p>En este último tiempo, me propuse retomar el camino de la programación, un rubro que siempre me gusto. Habiendo finalizado la carrera de Desarrollador Frontend JS React, mi objetivo laboral es incursionar en el mundo de la programación desde un lugar más protagonista aplicando las habilidades aprendidas estos años</p>
            <p>Me gustaria poder aportar soluciones digitales a problemas reales que se presentan en el dia a dia</p>
            <Button variant="dark" size='lg'><NavLink to={`/contacto`} style={estiloBoton}>Contactarme</NavLink></Button>
            </div>
        </div>
        
    </div>
  )
}

export default SobreMi