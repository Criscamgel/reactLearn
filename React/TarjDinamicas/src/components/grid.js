import React, { Component } from 'react';
import '../css/styles.css'
import '../css/grid.css'

class Grid extends Component{

    state = {
        items:[{
            nombre:"Camilo",
            codigo:"1234",
            color:"blue"

        }]
    }

    getName = (event)=>{return event.target.value;}
    getCode = (event)=>{return event.target.value;}
    getColor = (event)=>{return event.target.value;}

    addElement () {
        return this.state.items.map((item, i) =>(

            <div className="tjt" key={i}>                
                <p>{item.nombre}</p>
                <p>{item.codigo}</p>
                <p>{item.color}</p>
            </div>
        ))
    }

    generateElement () {

        let newElement = {
                nombre:this.getName,
                codigo:this.getCode,
                color:this.getColor
            }
        let newArray = this.state.items.push(newElement);

        this.setState({
                items:newArray
            })

    }

    removeElement(){

        let newArray = this.state.items.slice(0, -1);

        this.setState({
            items:newArray
        })

    }

    render (){
        
        return(
       
        <div className="contenedor">       
            <div className="contenedor-tjt">   
                    {this.addElement()}
            </div>

            <div className="contenedor-info">

                <form>
                    <input id="nombre" onChange={this.getName} type="text" placeholder="Nombre"/>
                    <input id="codigo" onChange={this.getCode} type="text" placeholder="Codigo"/>
                    <input id="color" onChange={this.getColor} type="text" placeholder="Color"/>
                    <div id="btnCrear" onClick={()=>this.generateElement()} value="Crear">Crear</div>
                    <div id="btnBorrar" onClick={()=>this.removeElement()} value="Eliminar">Eliminar</div>
                </form>

            </div>
        </div>

        )
    }

}

export default Grid;
