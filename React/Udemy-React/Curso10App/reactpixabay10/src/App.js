import React, { useState, useEffect } from 'react';
import Buscador from './components/Buscador';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  const [busqueda, guardarBusqueda] = useState('')
  const [imagenes, guardarImagenes] = useState([])
  const [paginaActual, guardarPaginaActual] = useState(1)
  const [totalPaginas, guardarTotalPaginas] = useState(1)

  useEffect(() => {

    const consultarApi = async () => {

      if (busqueda === '') return null

      const imagenesPorPagina = 30
      const key = '12801223-84e0a4950884d60c1d64c1e9c'
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`

      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      guardarImagenes(resultado.hits)
      //Saber que número de resultados se obtiene
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina)
      guardarTotalPaginas(calcularTotalPaginas)

      //Mover el Scroll a la página Superior
      const jumbotron = document.querySelector('.jumbotron')
      jumbotron.scrollIntoView({behavior:'smooth', block:'end'})

    }
    consultarApi()
  }, [busqueda, paginaActual])

  const paginaAnterior = () => {
    let nuevaPaginaAnterior = paginaActual - 1
    guardarPaginaActual(nuevaPaginaAnterior)
  }

  const paginaSiguiente = () => {
    let nuevaPaginaSiguiente = paginaActual + 1
    guardarPaginaActual(nuevaPaginaSiguiente)
  }

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>

        <Buscador guardarBusqueda={guardarBusqueda} />

      </div>
      <div className="row justify-content-center">
        <ListadoImagenes
          imagenes={imagenes}
        />
        {(paginaActual === 1) ? null :
          (<button onClick={paginaAnterior} className="btn btn-info mr-1 mb-5" type="button">Anterior &laquo;</button>)
        }


        {(paginaActual === totalPaginas) ? null :
          (<button onClick={paginaSiguiente} className="btn btn-info mr-1 mb-5" type="button">Siguiente &raquo;</button>)
        }
      </div>
    </div>
  );
}

export default App;
