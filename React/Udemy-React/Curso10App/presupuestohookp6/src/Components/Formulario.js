import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

function Formulario(props){

    const { guardarGasto, guardarCrearGasto } = props

    //State
    const [ nombreGasto, guardarNombreGasto ] = useState('')
    const [ cantidadGasto, guardarCantidadGasto ] = useState(0)
    const [ error, guardarError ] = useState(false)

    
    //Cuando se agrega el gasto
    const agregarGasto = e => {
        e.preventDefault()

        //Validar
        if(cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === ''){
            guardarError(true)
            return
        }
        
        
        //Pasar el gasto al componente principal
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }

        //Pasar el gasto al componente principal
        guardarGasto(gasto)
        guardarCrearGasto(true)

        //ELiminar Alerta
        guardarError(false)

        //Resetear el form
        guardarNombreGasto('')
        guardarCantidadGasto('')

    }

return(
    <form onSubmit={agregarGasto}>
        <h2>Agrega tus Gastos Aquí</h2>

        {error ? <Error mensaje="Ambos campos son obligatorios"/> :null}

        <div className="campo">
        <label htmlFor="">Nombre Gasto</label>
        <input 
        type="text"
        className="u-full-width"
        placeholder="Ej. Trasporte"
        onChange={e => guardarNombreGasto(e.target.value)}
        value={nombreGasto}
        />
        </div>

        <div className="campo">
        <label htmlFor="">Cantidad Gasto</label>
        <input 
        type="number"
        className="u-full-width"
        placeholder="Ej. 300"
        onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
        value={cantidadGasto}
        />
        </div>

        <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>
    </form>
)
}

export default Formulario;