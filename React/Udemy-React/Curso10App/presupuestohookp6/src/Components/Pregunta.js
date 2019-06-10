import React, { useState } from 'react';
import Error from './Error';

function Pregunta(props){

    //Extraer de props
    const {guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante} = props

    //Definir el State
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)
 
    const agregarPresupuesto = e => {
        e.preventDefault();

        /* console.log(typeof cantidad)
        console.log(cantidad) */

        /* validar */
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true)
            return;
        }

        // Si pasa la validación
        guardarError(false)
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        guardarPreguntaPresupuesto(false)
    }

return(
    <React.Fragment>
    <h2>Coloca tu presupuesto</h2>

    {/* Fragmento condicional error */}

    {error ? <Error mensaje="El presupuesto es Incorrecto"/> :null}

    <form 
    onSubmit={agregarPresupuesto}
    >
        <input type="number" className="u-full-width" 
        placeholder="Agrega tu presupuesto"
        //Guarda en cantidad
        onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        />
        <input type="submit"
        className="button-primary u-full-width"
        value="Definir Presupuesto"
        />

    </form>
    </React.Fragment>
)
}

export default Pregunta;