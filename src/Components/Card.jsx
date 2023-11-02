import React from 'react'
import '../Styles/Card.css'

const Card = ({nombre, autor}) => {
  return (
    <div className='card'>
        <h3>Perfecto, tu cancion favorita es {nombre}!</h3>
        <h4>del autor {autor}</h4>
    </div>
  )
}

export default Card