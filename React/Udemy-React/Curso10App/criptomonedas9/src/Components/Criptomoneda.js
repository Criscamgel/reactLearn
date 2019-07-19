import React from 'react';

const Criptomoneda = ({criptomoneda}) => {

    const { FullName, Name } = criptomoneda.CoinInfo

    return (
        <React.Fragment>
            <option value={Name}>{FullName}</option>
        </React.Fragment>
    );
};

export default Criptomoneda;