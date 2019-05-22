import React, { Component } from 'react';
import Listado from './Listado';

class Post extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="contListado">
                    <Listado 
                    posts={this.props.posts}
                    borrarPost={this.props.borrarPost}
                     />
                </div>
            </div>
        )
    }
}

export default Post;