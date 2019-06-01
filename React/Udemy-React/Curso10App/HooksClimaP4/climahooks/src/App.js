import React, { useState, useEffect } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import Error from "./Error";
import ResultadoClima from "./ResultadoClima";

function App() {
  //State Principal

  // ciudad = state, guardarCiudad = this.setState({})
  const [ciudad, guardarCiudad] = useState("")
  const [pais, guardarPais] = useState("")
  const [error, guardarError] = useState(false)
  const [resultado, guardarResultado] = useState("")

  useEffect(() => {
    
    if(ciudad === '') return 

    const consultarAPI = async () => {

      const key = 'c465fef418a27472bce80775ca53a38f'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${key}`

      // Consultar URL
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      guardarResultado(resultado)
    }
    
    consultarAPI()
    
  }, [ciudad, pais])

  //Cargar un componente condicionalmente

  let componente;
  if(error){
    //Hay un error mostrarlo
    componente = <Error mensaje="Ambos campos son obligatorios"/>
  }else if(resultado.cod === "404"){
    componente = <Error mensaje="La ciudad no existe en nuestro registro"/>
  }else{
    componente =  <ResultadoClima
                    resultado={resultado}
                    />
  } 

  const datosConsulta = datos => {
    //Validar Campos

    if (datos.ciudad === "" || datos.pais === "") {
      guardarError(true)
      return
    } else {
      guardarCiudad(datos.ciudad)
      guardarPais(datos.pais)
      guardarError(false)
    }
  } 

  return (
    <div className="app">
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario datosConsulta={datosConsulta} />
            </div>
            <div className="col s12 m6">
            {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
