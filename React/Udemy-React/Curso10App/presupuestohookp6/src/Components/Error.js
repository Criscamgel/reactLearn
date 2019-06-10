import React from "react";

const Error = ({mensaje}) => {
    return(
    <React.Fragment>
    <p className="alert alert-danger error">{mensaje}</p>
    </React.Fragment>
    )
};
export default Error;
