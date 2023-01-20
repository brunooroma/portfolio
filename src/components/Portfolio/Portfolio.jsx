import './Portfolio.css'
import data from '../Data/data.js'

const Proyectos = async ({greeting}) => {

  let response = await fetch('data.js')
  let data = await response.json()
  let proyectos = data;

  console.log(proyectos)

  return (
    <div className='divPortfolio'><h1>{greeting}</h1></div>
  )
}

export default Proyectos