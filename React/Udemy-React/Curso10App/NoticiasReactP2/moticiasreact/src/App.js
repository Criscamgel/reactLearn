import React, { Component } from 'react';
import Header from './Componentes/Header';
import ListaNoticias from './Componentes/ListaNoticias';
import Formulario from './Componentes/Formulario';

class App extends Component {

  state = {

    noticias:[]

  }

  componentDidMount(){
    this.consultarNoticias();  
  }

  consultarNoticias = async (categoria='general') => {

    const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=d15c66853bde4d60a6a57f0be86c7cab`
  
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    })

  }

  

  render() {
    return (
      <React.Fragment>
        <Header
        titulo="Noticias React API"
        />

        <div className="container white contenedor-noticias">
        <Formulario
        consultarNoticias={this.consultarNoticias}
        />
        </div>

        <div className="container white contenedor-noticias">
        <ListaNoticias
        noticias={this.state.noticias}
        />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
