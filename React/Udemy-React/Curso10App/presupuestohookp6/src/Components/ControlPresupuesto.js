import React from 'react';
import { revisarPresupuesto } from '../Helper';

const ControlPresupuesto = ({presupuesto, restante}) => (
    
        <React.Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </React.Fragment>
)

export default ControlPresupuesto;