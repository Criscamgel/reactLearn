import React, {Component} from 'react';
import '../css/styles.css'
import '../css/grid.css'

class Grid extends Component{

    render(){
        return(
        <div class="contenedor">
            <div class="contenedor-tjt">
    
                    <div class="tjt">
                        <p>Primero</p>
                        <p>Segundo</p>
                        <p>Tercero</p>
                    </div>
    
                    <div class="tjt">
                        <p>Primero</p>
                        <p>Segundo</p>
                        <p>Tercero</p>
                    </div>
    
                    <div class="tjt">
                        <p>Primero</p>
                        <p>Segundo</p>
                        <p>Tercero</p>
                    </div>
    
                    <div class="tjt">
                        <p>Primero</p>
                        <p>Segundo</p>
                        <p>Tercero</p>
                    </div>    
            </div>

            <div class="contenedor-info">

                <form>
                    <input id="nombre" type="text" placeholder="Nombre"/>
                    <input id="codigo" type="text" placeholder="Codigo"/>
                    <input id="color" type="text" placeholder="Color"/>
                </form>

            </div>

        </div>

        )
    }

}

export default Grid;
