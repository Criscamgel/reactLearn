import React from 'react';
import ReactDOM from 'react-dom';


const App = () =>{
    return React.createElement('h1',{className:'title', id:'elId'}, React.createElement('div'),'Hola Mundo')
}

ReactDOM.render(<App/>,document.querySelector('#root'));