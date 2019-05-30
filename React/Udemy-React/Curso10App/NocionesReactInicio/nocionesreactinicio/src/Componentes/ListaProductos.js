import React, { Component } from 'react';
import Producto from './Producto';

export default class ListaProductos extends Component {

    state = {
        productos: []

    }

    componentDidMount() {

        console.log(1)

        this.setState({
            productos: [
                { id: 1, nombre: 'Camisa ReactJS', precio: 30 },
                { id: 2, nombre: 'Camisa VueJS', precio: 30 },
                { id: 3, nombre: 'Camisa AngularJS', precio: 30 },
                { id: 4, nombre: 'Camisa NodeJS', precio: 30 }
            ]
        })

    }

    componentWillMount() {
        /* Antes de que se cargue */
        console.log(2)
    }

    componentWillUpdate() {
        console.log(3)
    }

    componentWillUnmount() {
        console.log(4)
    }

    /* Funciones Propias */

    render() {

        console.log(5)

        const { productos } = this.state;

        return (
            <React.Fragment>
                <h1>Lista de productos</h1>
                {productos.map(producto => (
                    <Producto
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </React.Fragment>
        );
    }
}