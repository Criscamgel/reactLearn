import React from 'react';
import ReactDOM from 'react-dom';


//Arrow Function const App = () =>{ 
    //return React.createElement('h1',{className:'title', id:'elId'}, 'Holaa')
    
    //Return con un línea --->
    //return <h1>Hello react !!</h1>

    //Return con varias líneas --->
    /*return (
        <div>
            Header
        </div>
    )*/

    //COMPONENTS

    import Header from './components/header'

    const App = () =>{    

    return (
        <div>
            <Header/>
        </div>
    )


}

ReactDOM.render(<App/>,document.querySelector('#root'));