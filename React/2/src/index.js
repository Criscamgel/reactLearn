import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
//Component
import Post from './components/post';
import Profiles from './components/profiles';

const App = () =>{

    return(
        <BrowserRouter>
            <div>
                <Route path="/post" components={Post}/>
                <Route path="/profiles" components={Profiles}/>
            </div>
        </BrowserRouter>
    )

}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)