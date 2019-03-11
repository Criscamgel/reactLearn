import React from 'react';
import NewGrid from './newgrid'
import '../css/styles.css'
import '../css/grid.css'

const Grid = (props) =>{

    return(
        
        <div class="contenedor">            
            <div class="contenedor-tjt">                    
                    <NewGrid/>
            </div>

            <div class="contenedor-info">

                <form>
                    <input id="nombre" onChange={props.names} type="text" placeholder="Nombre"/>
                    <input id="codigo" onChange={props.codes} type="text" placeholder="Codigo"/>
                    <input id="color" onChange={props.colors} type="text" placeholder="Color"/>
                    <div id="btnCrear" onClick="" value="Crear">Crear</div>
                </form>

            </div>

        </div>

        )
    }

export default Grid;
