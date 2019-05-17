import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

class Router extends Component {
    state = {

    }
    render(){
        return(

        <BrowserRouter>
            <Header/>
        </BrowserRouter>    

        );
    }
}

export default Router;