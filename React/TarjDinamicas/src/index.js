import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//Components
import Header from './components/header';
import Grid from './components/grid';
//import PropTypes from 'prop-types'

//JSON
//import JSON from './db.json';

class App extends Component {

    render(){

        return(
            <div>
                <Header/>
                <Grid/>                                 
            </div>
            
            )

    }

    /*App.propTypes = {


    }*/


}

ReactDOM.render(<App />, document.getElementById('root'));