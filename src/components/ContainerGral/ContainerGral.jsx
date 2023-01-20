import React from 'react'
import { useParams } from 'react-router-dom'

const ContainerGral = ({greeting}) => {

  return (
    <>
      <div><h1>{greeting}</h1></div>
      <div></div>
    </>
  )
}

export default ContainerGral