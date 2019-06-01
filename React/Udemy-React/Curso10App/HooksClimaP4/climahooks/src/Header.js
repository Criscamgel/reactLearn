import React from 'react';

function Header({titulo}){
    return(
        <nav>
            <div className="nev-wrapper light-blue darken-2">
            <a href="!#" className="brand-logo">{titulo}</a>
            </div>
        </nav>
    )
}

export default Header;