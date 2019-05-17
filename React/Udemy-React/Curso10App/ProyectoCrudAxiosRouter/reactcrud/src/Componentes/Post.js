import React, { Component } from 'react';
import Listado from './Listado';

class Post extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="contPost">
                    <div className="tituloPost"><p>Desde Post</p></div>
                </div>
                <div className="contListado">
                    <Listado posts={this.props.posts} />
                </div>
            </div>
        )
    }
}

export default Post;