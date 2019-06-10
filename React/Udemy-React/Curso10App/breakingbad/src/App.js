import React, {useState, useEffect} from 'react';
import axios from 'axios';

//Otros Componentes

function Frase({frase}){
  return (
    <div className="frase">
      <h1>{frase.quote}</h1>
      <p>-{frase.author}</p>
    </div>
  )
}


function App(){

  //Final Componentes
  const [frase, obtenerFrase] = useState({})
  
  const consultarAPI = async () => {
    
      const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
      // Agregar el resultado de la API al state; (Similar a this.setState)
      obtenerFrase(resultado.data[0])
    }

  // Consulta a una rest api
  
  useEffect(
    () => {
      consultarAPI()
    },[] /* Para que no itere infinitamente */
    
  )

  return (
    <div className="contenedor">
      <Frase
      frase={frase}
      />
      <button
      onClick={consultarAPI}
      >
        Generar Nueva
      </button>
    </div>
  )
}

export default App;