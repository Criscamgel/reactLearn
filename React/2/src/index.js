import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
//Components
import notFound from './components/notFound';
import Home from './components/home';
import Post from './components/post';
import Profiles from './components/profiles';
import PostItem from './components/posts_item';
import Life from './components/lifeCycles';

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
                <NavLink to="/life">Life</NavLink>
                <hr/>
                
            </header>
                <Switch>                                     
                    <Route path="/posts/:id/:username" component={PostItem}/>
                    <Route path="/profiles" component={Profiles}/>
                    <Route path="/life" component={Life}/>
                    <Route path="/posts" component={Post}/>
                    <Route path="/" exact component={Home}/>
                    <Route component={notFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    )

}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)