import React from "react";

function ResultadoClima({resultado}) {
  
    const {name, main } = resultado

    if(!name) return null

    // restar grados Kelvin
    const kelvin = 273.15
  
   return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {name} es:</h2>
        <p className="temperatura">
        {parseInt(main.temp_max - kelvin, 10)} &#x2103;
        </p>        
        <p>Temperatura Máxima: {parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
        <p>Temperatura Minima: {parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>
      </div>
    </div>
  );
}

export default ResultadoClima;