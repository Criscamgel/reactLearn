import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//React sin JSX

const titulo = React.createElement(
    'h1',
    {id: 'titulo', className: 'encabezado'},
    'Hola Mundo'
)

ReactDOM.render(titulo, document.getElementById('root'));
serviceWorker.unregister();
