import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Productos from '../public/components/Productos';
import EditarProducto from '../public/components/EditarProductos';
import AgregarProducto from '../public/components/AgregarProducto';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/nuevo-producto" component={AgregarProducto}/>
      </Switch>
    </Router>
  );
}

export default App;
