import React, {Component} from 'react';
import '../css/styles.css'
import '../css/grid.css'

class NewGrid extends Component{

    render(){

        return(

            <div className="tjt">
                <p>{this.props.nombre}</p>
                <p>{this.props.codigo}</p>
                <p>{this.props.color}</p>
            </div>

        )    
    }
}

export default NewGrid;
