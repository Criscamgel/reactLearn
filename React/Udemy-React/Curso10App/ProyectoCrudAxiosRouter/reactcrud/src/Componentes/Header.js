import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="cabecera">
            <Link to={'/'}>
                <h1>Header Crud</h1>
            </Link>
        </header>
    )
}

export default Header;