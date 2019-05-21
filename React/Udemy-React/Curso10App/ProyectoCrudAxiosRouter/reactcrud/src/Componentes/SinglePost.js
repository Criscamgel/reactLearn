import React, { Component } from 'react';

class SinglePost extends Component {

    mostrarPost = (props) => {

        if (!props.post) return null;
        const { title, body, userId } = this.props.post;

        return (
            <React.Fragment>
                <div className="titleSp">
                    <h1>{title}</h1>
                </div>
                <div className="bodySp">
                    <p className="autor">Autor Id: {userId}</p>
                    <p>{body}</p>
                </div>
                
            </React.Fragment>
        )
    }

    render() {

        return (
            <div>{this.mostrarPost(this.props)}</div>
        );
    }
}

export default SinglePost;