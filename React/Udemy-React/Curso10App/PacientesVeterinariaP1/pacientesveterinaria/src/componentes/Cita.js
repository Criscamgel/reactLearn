import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {
    return (
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">{cita.mascota}</h3>

                <p className="card-text">
                <span>Nombre Dueño: </span><span>{cita.propietario}</span>
                </p>
                <p className="card-text">
                <span>Fecha: </span><span>{cita.Fecha}</span>
                </p>
                <p className="card-text">
                <span>Hora: </span><span>{cita.hora}</span>
                </p>
                <p className="card-text">
                <span>Sintomas: </span>
                </p>
                <p className="card-text">{cita.sintomas}
                </p>

                <button 
                className="btn btn-danger"
                /* Es de esa forma para que espere el click */
                onClick={() => eliminarCita(cita.id)}
                >
                Borrar
                </button>
                
            </div>
        </div>
    );
};

Cita.propTypes = {
    cita : PropTypes.object.isRequired,
    eliminarCita : PropTypes.func.isRequired
}

export default Cita;