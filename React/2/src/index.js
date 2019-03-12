import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//Components
import Header from './components/header';
import Grid from './components/grid';
//import PropTypes from 'prop-types'

class App extends Component {

    state = {

        filtered:[] 

    }

    getName = (event) => {
        this.setState({textName: event.target.value})
    }

    getCode = (event) => {
        this.setState({textCode: event.target.value})

    }

    getColor = (event) => {
        this.setState({textColor: event.target.value})

    }

    created = () => {

        console.log("Hola")

    }

    render(){

        return(
            <div>
                <Header/>
                <Grid 
                names={this.getName}
                nombre={this.state.textName}
                codes={this.getCode}
                codigo={this.state.textCode}
                colors={this.getColor}
                color={this.state.textColor}
                createds={this.created}                
                />                                 
            </div>
            
            )

    }

    /*App.propTypes = {


    }*/


}

ReactDOM.render(<App />, document.getElementById('root'));