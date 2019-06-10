import React, { useState, useEffect } from "react";
import Pregunta from "./Components/Pregunta";
import Formulario from "./Components/Formulario";
import Listado from "./Components/Listado";
import ControlPresupuesto from "./Components/ControlPresupuesto";

function App() {

  //state
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true)
  const [crearGasto, guardarCrearGasto] = useState(false)
  const [gasto, guardarGasto] = useState({})
  const [gastos, guardarGastos] = useState([])

  useEffect(() => {
    if(crearGasto){
    const listadoGastos = [...gastos, gasto]
    guardarGastos(listadoGastos)

    //Restar el presupuesto
    const presupuestoRestante = restante - gasto.cantidadGasto
    guardarRestante(presupuestoRestante)

    // Una vez que se agrega, lo ponemos false
    guardarCrearGasto(false)
    }
    //Cual es la variable que espera para hacer el use effect
  }, [crearGasto, gastos, gasto, restante])

  return (
    <div className="App container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {(preguntaPresupuesto)
          ?
          <Pregunta
          guardarPresupuesto={guardarPresupuesto}
          guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
          guardarRestante={guardarRestante}
          />
          :(
            <div className="row">
            <div className="one-half column">
            <Formulario
            guardarGasto={guardarGasto}
            guardarCrearGasto={guardarCrearGasto}
            /> 
            </div>
            <div className="one-half column">
            <Listado
              gastos={gastos}
            />
            <ControlPresupuesto
            presupuesto={presupuesto}
            restante={restante}
            />
            </div>
            </div>
          )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
