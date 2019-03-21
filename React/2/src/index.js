import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
//Components
import Home from './components/home';
import Post from './components/post';
import Profiles from './components/profiles';
import PostItem from './components/posts_item';

const App = () =>{

    return(
        <BrowserRouter>
            <div>
            <header>
                <NavLink to="/">Home</NavLink><br/>
                <NavLink 
                    to="/posts"
                    activeStyle={{color:'red'}}
                    activeClassName="selected"
                >Posts</NavLink><br/>
                <NavLink to={{
                    pathname:'profiles',
                    hash:'#francis',
                    search:'?profile=true'
                }}>Profiles</NavLink><br/>
                <hr/>
            </header>
                <Route path="/" exact component={Home}/>
                <Route path="/posts" exact component={Post}/>
                <Route path="/posts/:id/:username" component={PostItem}/>
                <Route path="/profiles" component={Profiles}/>
            </div>
        </BrowserRouter>
    )

}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)