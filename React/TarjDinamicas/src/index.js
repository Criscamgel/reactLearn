import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//Components
import Header from './components/header';
import Grid from './components/grid';
//import PropTypes from 'prop-types'

//JSON
import JSON from './db.json';

class App extends Component {

    state = {

        initList:JSON,
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

       let i = this.state.initList.length;

       this.state.initList[i-1].nombre = this.state.textName
       this.state.initList[i-1].codigo = this.state.textCode
       this.state.initList[i-1].color = this.state.textColor

    }

    render(){

        return(
            <div>
                <Header/>
                <Grid
                initList = {this.state.initList} 
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