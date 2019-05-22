import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default class post extends Component {

    confirmarEliminacion = () => {

        const { id } = this.props.info;

        Swal.fire({
            title: 'Esta seguro?',
            text: "Esta acción no se puede deshacer",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borrar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
              this.props.borrarPost(id)
              Swal.fire(
                'Borrado!',
                'El post ha sido borrado correctamente.',
                'success'
              )
            }
          })        

    }

    render() {
        const { id, title } = this.props.info;
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <Link to={`/post/${id}`} className="btn btn-primary">
                        <i className="fa fa-search-plus"></i>
                    </Link>
                    <Link to={`/editar/${id}`} className="btn btn-warning">
                    <i className="fa fa-pencil-square-o"></i>
                    </Link>
                    <button onClick={this.confirmarEliminacion} className="btn btn-danger"><i className="fa fa-times"></i></button>                    
                </td>
            </tr>
        );
    }
}