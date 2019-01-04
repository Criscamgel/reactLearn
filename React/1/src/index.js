import React from 'react';
import ReactDOM from 'react-dom';


const App = () =>{
    /*return React.createElement('h1',{className:'title', id:'elId'}, React.createElement('div'))*/
    return <h1>Hello react !!</h1>
}

ReactDOM.render(<App/>,document.querySelector('#root'));