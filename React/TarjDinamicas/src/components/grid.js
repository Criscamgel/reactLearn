import React, {Component} from 'react';
import NewGrid from './newgrid'
import '../css/styles.css'
import '../css/grid.css'

class Grid extends Component{

    render (){
        
        return(
       
        <div className="contenedor">       
            <div className="contenedor-tjt">   
                    <NewGrid initList = {this.props.initList} nombre={this.props.nombre} codigo={this.props.codigo} color={this.props.color}/>
            </div>

            <div className="contenedor-info">

                <form>
                    <input id="nombre" onChange={this.props.names} type="text" placeholder="Nombre"/>
                    <input id="codigo" onChange={this.props.codes} type="text" placeholder="Codigo"/>
                    <input id="color" onChange={this.props.colors} type="text" placeholder="Color"/>
                    <div id="btnCrear" onClick={this.props.createds} value="Crear">Crear</div>
                </form>

            </div>
        </div>

        )
    }

}

export default Grid;
