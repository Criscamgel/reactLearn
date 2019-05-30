import React, {Fragment} from 'react';
import Header from './Componentes/Header';
import './Css/index.css';
import Footer from './Componentes/Footer';
import ListaProductos from './Componentes/ListaProductos';

export default function App() {

        const age = new Date().getFullYear()

        return (

            <Fragment>
                <Header
                titulo='Tienda Virtual'
                />
                <ListaProductos/>
                <Footer
                age={age}
                />
            </Fragment>
        );
    }