import React from 'react';
import ReactDOM from 'react-dom';


const App = () =>{ //Arrow Function
    return React.createElement('h1',{className:'title', id:'elId'}, 'Holaa')
    
    //Return con un línea --->
    //return <h1>Hello react !!</h1>

    //Return con varias líneas --->
    /*return (
        <div className="newElement">
            <h1>Hello React</h1>
            <div>Hey</div>
        </div>
    )*/


}

ReactDOM.render(<App/>,document.querySelector('#root'));