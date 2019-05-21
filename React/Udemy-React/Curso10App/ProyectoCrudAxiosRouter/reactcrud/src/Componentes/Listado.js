import React, { Component } from 'react';
import Post from './Post';

class Listado extends Component {

    mostrarPosts = () => {
        const posts = this.props.posts;

        if(posts.length === 0) return null;

        return(

            <React.Fragment>
                {Object.keys(posts).map(post => (
                    <Post
                        key={post}
                        info={this.props.posts[post]}
                    />
                ))}
            </React.Fragment>
        )
    }

    render(){
        return(
            <table className="table">
            <thead>
                <tr>
                    <th className="" scope="col">Id</th>
                    <th className="text-center" scope="col">Titulo</th>
                    <th className="" scope="col">Acciones</th>
                </tr>
                </thead>

                <tbody>
                    {this.mostrarPosts()}
                </tbody>
            </table>
        );
    }
}

export default Listado;