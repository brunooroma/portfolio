import background from "../../utils/img/fondoInicio.jpg";
import './Inicio.css'

const Inicio = ({ greeting }) => {
  return (
    <div className="contenedorInicio"
      style={{
        backgroundImage: `url(${background})`,
        height: "98vh",
        backgroundSize: "cover",
      }}
    >
      <h1 >{greeting}</h1>
      <div className="divInicio"></div>
    </div>
  );
};

export default Inicio;
