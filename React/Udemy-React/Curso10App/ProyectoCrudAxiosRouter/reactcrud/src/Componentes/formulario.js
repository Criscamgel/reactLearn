import React, { Component } from 'react';

class Formulario extends Component {

    //Refs

    tituloRef = React.createRef();
    contenidoRef = React.createRef();
    
    crearPost = (e) => {
        e.preventDefault();
        //Leer Refs
        const post = {
            title : this.tituloRef.current.value,
            body : this.contenidoRef.current.value,
            userId: 1
        }
        /* Llamando el post que compartimos desde Router */
        this.props.crearPost(post);
    }

    render() {
        return (
            <div className="contForm">
            <form onSubmit={this.crearPost} className="formulario">
                <legend className="text-center">Crear un Nuevo Post</legend>
                <div className="form-group">
                    <label>Titulo del Post</label>
                    <input type="text" ref={this.tituloRef} className="form-control" placeholder="Titulo del post" />
                </div>

                <div className="form-group">
                    <label>Contenido del post</label>
                    <textarea ref={this.contenidoRef} className="form-control" placeholder="Contenido del post"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
            </div>
        );
    }
}

export default Formulario;