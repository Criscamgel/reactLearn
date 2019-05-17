import React from 'react';
import { Link } from 'react-router-dom';
import './Css/global.css';

const Header = () => {
    return (
        <header className="cabecera">
            <div className="tituloPpal">
                <Link to={'/'}>
                    <h1>Post Crud</h1>
                </Link>
            </div>
        </header>
    )
}

export default Header;