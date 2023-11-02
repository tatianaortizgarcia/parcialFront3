import { useState } from 'react'
import Card from './Card'

const Formulario = () => {
    const [cancion, setCancion] = useState({
        nombre: '', 
        autor: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(cancion.nombre.length >= 3 && cancion.autor.length >= 6){
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }

  return (
    <div>
            <form onSubmit={handleSubmit}>
                <label >Nombre Cancion</label>
                <input type="text" value={cancion.nombre} onChange={(event) => setCancion({...cancion, nombre: event.target.value.trimStart()})}/>
                <label >Autor</label>
                <input type="text" value={cancion.autor} onChange={(event) => setCancion({...cancion, autor: event.target.value})}/>
                <button>Enviar</button>
            </form>
        
        {show && !error && 
            <Card nombre={cancion.nombre} autor={cancion.autor}/>
        }
        {error && <h5 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h5>}

    </div>
  )
}

export default Formulario