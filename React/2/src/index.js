import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
//Component
import component from 'posts';



const App = () =>{

    return(
        <div>Home</div>
    )

}

ReactDOM.render(
    <App/>
    <Posts/>
    ,
    document.querySelector('#root')
)