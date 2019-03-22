import React from 'react';

const Conditional = () => {

    const value = false

    const returnValue =() => {
        ////
        return true;
    }

    const showIt = () => {
        return (
            returnValue() ?
            <div>
                Conditional
            </div>
            :
            <div>
                Conditional False
            </div>
        )
    }

    return(
        <div>
            {showIt()}
        </div>
    )

}

export default Conditional;