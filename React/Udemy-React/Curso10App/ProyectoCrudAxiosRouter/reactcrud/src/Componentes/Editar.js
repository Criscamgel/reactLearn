import React, { Component } from 'react';

class Editar extends Component {

    //Refs

    tituloRef = React.createRef();
    contenidoRef = React.createRef();

    editarPost = (e) => {
        e.preventDefault();
        //Leer Refs
        const post = {
            title: this.tituloRef.current.value,
            body: this.contenidoRef.current.value,
            userId: 1,
            id: this.props.post.id
        }
        /* Llamando el post que compartimos desde Router */
        this.props.editarPost(post);
    }

    cargarFormulario = () => {

        if (!this.props.post) return null;

        const { title, body } = this.props.post;

        return (
            <div className="contForm">
                <form onSubmit={this.editarPost} className="formulario">
                    <legend className="text-center">Editar Post</legend>
                    <div className="form-group">
                        <label>Titulo del Post</label>
                        <input type="text" ref={this.tituloRef} defaultValue={title}
                            className="form-control" placeholder="Titulo del post"
                        />
                    </div>

                    <div className="form-group">
                        <label>Contenido del post</label>
                        <textarea ref={this.contenidoRef} className="form-control"
                            placeholder="Contenido del post" defaultValue={body}>
                        </textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
            </div>)
    }

    render() {

        return (
            <React.Fragment>
                {this.cargarFormulario()}
            </React.Fragment>
        );
    }
}

export default Editar;