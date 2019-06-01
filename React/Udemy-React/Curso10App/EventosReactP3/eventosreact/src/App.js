import React from "react";
import Header from "./Componentes/Header";
import CategoriasProvider from "./Context/CategoriasContext";
import Form from "./Componentes/Form";
import EventosProvider from "./Context/EventosContext";
import ListaEventos from "./Componentes/ListaEventos";

function App() {
  return (
    
      <EventosProvider>
        <CategoriasProvider>
          <Header />
          <div className="uk-container">
            <Form />
            <ListaEventos/>
          </div>
        </CategoriasProvider>
      </EventosProvider>
    
  );
}

export default App;
