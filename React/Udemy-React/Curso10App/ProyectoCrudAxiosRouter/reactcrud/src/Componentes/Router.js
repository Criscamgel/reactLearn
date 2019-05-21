import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Navegacion from './Navegacion';
import Posts from './Posts';
import SinglePost from './SinglePost';

class Router extends Component {
    state = {
            posts:[]
    }
    //Cargue Inicial
    componentDidMount(){
        this.obtenerPost();
    }

    obtenerPost = () =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            this.setState({
                posts : res.data
            })
        })
    }

    render(){
        return(

        <BrowserRouter>
            <Header/>
            <Navegacion/>
            <Switch>
                <Route exact path="/" render={() => {
                    return(
                        <Posts posts={this.state.posts}/>
                    )
                }}/>
                <Route exact path="/post/:postId" render={ (props) => {
                    let idPost = props.location.pathname.replace('/post/', '');
                    const posts = this.state.posts;
                    
                    let filtro = posts.filter(post => (
                        post.id == idPost
                    ))
                    return(
                        <SinglePost post={filtro[0]}/>
                    )
                } }
                
                />
            </Switch>
        </BrowserRouter>    

        );
    }
}

export default Router;