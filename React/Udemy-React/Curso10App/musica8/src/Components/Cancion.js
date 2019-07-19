import React from "react";

function Cancion({ letra }) {
//Si no tienes contenido, no muestres nada...    
if(letra.length === 0) return null
  return (
    <React.Fragment>
      <h2>Letra Canción</h2>
      <p className="letra">{letra}</p>
    </React.Fragment>
  );
}

export default Cancion;
