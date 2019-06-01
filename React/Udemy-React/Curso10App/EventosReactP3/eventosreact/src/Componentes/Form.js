import React, { Component } from "react";
import { CategoriasConsumer } from "../Context/CategoriasContext";
import { EventosConsumer } from "../Context/EventosContext";

class Form extends Component {
  state = {
    nombre: "",
    categoria: ""
  };

  //obtener los eventos

  obtenerDatosEvento = e => {
    /* e.prevent */
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <EventosConsumer>
        {(value) => {
          return (
            <form
            onSubmit={e => {
              e.preventDefault();
              value.obtenerEventos(this.state)
            }}
            >
              <fieldset className="uk-fieldset uk-margin">
                <legend className="uk-legend uk-text-center">
                  Busca tu evento por nombre o categoria
                </legend>
              </fieldset>

              <div className="uk-column-1-3@m uk-margin">
                <div className="uk-margin" uk-margin="true">
                  <input
                    type="text"
                    name="nombre"
                    className="uk-input"
                    placeholder="Nombre de Evento o Ciudad"
                    onChange={this.obtenerDatosEvento}
                  />
                </div>

                <div className="uk-margin" uk-margin="true">
                  <select
                    name="categoria"
                    className="uk-select"
                    onChange={this.obtenerDatosEvento}
                  >
                    <option value="">--Selecciona una Categoria</option>
                    <CategoriasConsumer>
                      {value => {
                        return value.categorias.map(categoria => (
                          <option
                            key={categoria.id}
                            value={categoria.id}
                            data-uk-form-select
                          >
                            {categoria.name_localized}
                          </option>
                        ));
                      }}
                    </CategoriasConsumer>
                  </select>
                </div>

                <div>
                  <button
                    type="submit"
                    className="uk-button uk-button-danger"
                  >Busca Eventos</button>
                </div>
              </div>
            </form>
          )
        }}
      </EventosConsumer>
    )
  }
}

export default Form;
