import React from 'react';
import {Link} from 'react-router-dom';
import './Css/Navegacion.css';

const Navegacion = () => {
    return (
        <nav className="navegacion">
            <div className="itemUno"><Link to={'/'}>Todos los Post</Link></div>
            <div className="itemDos"><Link to={'/crear'}><i className="fa fa-plus-circle"></i>Crear Nuevo Post</Link></div>
        </nav>
    );
}

export default Navegacion;