import React, {Fragment} from 'react';
import Header from './Componentes/Header';
import './Css/index.css';
import Footer from './Componentes/Footer';

export default function App() {

        const age = new Date().getFullYear()

        return (

            <Fragment>
                <Header
                titulo='Tienda Virtual'
                />

                <Footer
                age={age}
                />
            </Fragment>
        );
    }