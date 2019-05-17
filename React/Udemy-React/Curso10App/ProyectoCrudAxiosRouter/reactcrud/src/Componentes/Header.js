import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Header = () => {
    return (
        <header className="cabecera">
            <Link to={'/'}>
                <h1>
                </h1>
            </Link>
        </header>
    )
}

export default Header;