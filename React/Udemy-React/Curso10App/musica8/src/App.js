import React, { useState, useEffect } from "react";
import Formulario from "./Components/Formulario";
import Cancion from "./Components/Cancion";
import axios from "axios";
import Informacion from "./Components/Informacion";

function App() {
  // Utilizar usestate con 3 states

  const [artista, agregarArtista] = useState("");
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  //Método para consultar la API de Letras de Canciones
  const consultarAPILetra = async busqueda => {
    const { artista, cancion } = busqueda;
    const url = `https://api.audd.io/findLyrics/?q=${artista}%20${cancion}`;

    const resultado = await axios(url);

    //Almacenando el Artista que se diligenció
    agregarArtista(artista);
    //Almacenando la letra que se inserto en el input
    /* if (!resultado.data) return null; */
    agregarLetra(resultado.data.result[0].lyrics);
  };

  //Método para consultar la API de información de las bandas
  const consultarAPIInfo = async () => {

    if(artista){
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      const resultado = await axios(url);
      if(resultado.data.artists[0] !== null){
      agregarInfo(resultado.data.artists[0]);
      }else{
      agregarInfo(resultado.data.artists[1]);
      }
    }
    
  }

  useEffect(() => {
    //Consultando la Información del Artista después de un cambio
    consultarAPIInfo();
  }, [artista]
  )

  return (
    <React.Fragment>
      <Formulario consultarAPILetra={consultarAPILetra} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
          <Informacion
          info={info}
          />
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
