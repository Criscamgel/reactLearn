import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//Components
import Header from './components/header';
import Grid from './components/grid';
import NewGrid from './components/newgrid';

class App extends Component {

    state = {

        filtered:[] 

    }

    getName = (event) => {
        //console.log(event.target.value)
        let name = event.target.value
        console.log("name -->" + name)
        return name;

        // this.setState({
        //     filtered
        // })
    }

    getCode = (event) => {

        let code = event.target.value
        console.log("code -->" + code)
        return code;

    }

    getColor = (event) => {

        let color = event.target.value
        console.log("color -->" + color)
        return color

    }

    render(){

        return(
            <div>
                <Header/>
                <Grid names={this.getName} codes={this.getCode} colors={this.getColor}></Grid>                    
            </div>
            
            )

    }


}

ReactDOM.render(<App />, document.getElementById('root'));