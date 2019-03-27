import React, { Component } from 'react';
import '../css/styles.css'
import '../css/grid.css'
import { get } from 'https';

class Grid extends Component{
    
    state = {
        items: [],
        item: {}
    }

    componentDidMount() {
        const { items } = this.state
        this.setState({ items })
    }

    //Recibiendo el value de cada input

    getTexts = (event, key) => {
        const item = {...this.state.item}
        item[key] = event.target.value;
        this.setState({ item })
    }

    addElement () {        

        return this.state.items.map((item, i) =>(

            <div className="tjt" key={i} style={{backgroundColor:item.color}}>                
                <p>{item.nombre}</p>
                <p>{item.codigo}</p>
                <p>{item.color}</p>
            </div>
        ))
    }

    generateElement () {
        const items = [...this.state.items]      
        items.push(this.state.item);
        this.setState({ items, item: {
            nombre:"",
            codigo:"",
            color: ""
        } })
    }

    removeElement(){

        let newArray = this.state.items.slice(0, -1);

        this.setState({
            items:newArray
        })

    }

    render (){            
        const { item } = this.state       
        return(
       
        <div className="contenedor">       
            <div className="contenedor-tjt">   
                    {this.addElement()}
            </div>

            <div className="contenedor-info">

                <form>
                    <input id="nombre" onChange={event => this.getTexts(event, 'nombre')} type="text" placeholder="Nombre" value={item.nombre}/>
                    <input id="codigo" onChange={event => this.getTexts(event, 'codigo')} type="text" placeholder="Codigo"  value={item.codigo}/>
                    <input id="color" onChange={event => this.getTexts(event, 'color')} type="text" placeholder="Color"  value={item.color}/>
                    <div id="btnCrear" onClick={()=>this.generateElement()} value="Crear">Crear</div>
                    <div id="btnBorrar" onClick={()=>this.removeElement()} value="Eliminar">Eliminar</div>
                </form>

            </div>
        </div>

        )
    }

}

export default Grid;
