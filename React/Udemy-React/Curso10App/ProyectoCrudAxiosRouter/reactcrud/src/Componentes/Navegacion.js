import React from 'react';
import {Link} from 'react-router-dom';
import './Css/Navegacion.css';

const Navegacion = () => {
    return (
        <nav className="navegacion">
            <div className="itemUno"><Link to={'/'}>Todos los Post</Link></div>
            <div className="itemDos"><Link to={'/crear'}>Nuevos Post</Link></div>
        </nav>
    );
}

export default Navegacion;