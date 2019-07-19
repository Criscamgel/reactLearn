import React, {useState, useEffect} from "react";
import imagen from "./img/cryptomonedas.png";
import Formulario from "./Components/Formulario";
import axios from "axios";
import Spinner from "./Components/Spinner";
import Cotizacion from "./Components/Cotizacion";

function App() {

  const [moneda, guardarMoneda] = useState('')
  const [criptomoneda, guardarCriptomoneda] = useState('')
  const [cargando, guardarCargando] = useState(false)
  const [resultado, guardarResultado] = useState({})

  useEffect(() => {
    //Consultando el servicio que cotizará la CM
    const cotizarCriptomoneda = async () => {

        //si no hay moneda no ejecutar
        if(moneda === '') return;

        const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const resultado = await axios.get(url)
        //Activar o desactivar el Spinner
        guardarCargando(true)
        //Ocultar Spinner
        setTimeout(() => {
          guardarCargando(false)
          guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda])
        }, 3000)
    }

    cotizarCriptomoneda() 
  }, [moneda, criptomoneda])

  //Mostrar Spinner o resultado

  const componente = (cargando) ? <Spinner/> : <Cotizacion resultado={resultado} moneda={moneda}/>

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img className="logotipo" src={imagen} alt="Imagen Criptomonedas" />
        </div>
        <div className="one-half column">
        <h1>Cotiza Criptomonedas al Instante</h1>
        <Formulario
        guardarMoneda={guardarMoneda}
        guardarCriptomoneda={guardarCriptomoneda}
        />    
        {componente}

        </div>
      </div>
    </div>
  );
}

export default App;
