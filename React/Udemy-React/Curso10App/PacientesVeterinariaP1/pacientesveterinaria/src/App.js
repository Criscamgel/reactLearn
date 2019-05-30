import './bootstrap.min.css';
import React, { Component } from 'react';
import Header from './componentes/Header';
import NuevaCita from './componentes/NuevaCita';
import ListaCitas from './componentes/ListaCitas';

class App extends Component {

  state = {
    citas: []
  }

  /* Cuando la aplicación cargue */
  componentDidMount(){
    const citasLS = localStorage.getItem('citas')
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  /* Cuando agregamos o eliminamos una nueva cita */
  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas))
  }

  crearNuevaCita = (cita) => {
    /* Destructuring de citas con un push de una nueva cita */
    const citas =  [...this.state.citas, cita]

    this.setState({
      citas
    })
  }

  eliminarCita = (id) => {
    /* Copia del State */
    const citasActuales = [...this.state.citas]
    /* Filter Retorname los que son diferentes al que yo le di click*/
    const citas = citasActuales.filter(cita => cita.id !== id)
    /* Actualizar el State */
    this.setState({
      citas
    })
  }

  render() {
    return (
      <div className="container">
        <Header
          titulo="Administrador Pacientes Veterinaria"
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
          <ListaCitas
            citas={this.state.citas}
            eliminarCita={this.eliminarCita}
          />
          </div> 

        </div>

      </div>
    );
  }
}

export default App;