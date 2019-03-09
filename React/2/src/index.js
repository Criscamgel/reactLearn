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

    getKeyword = (event) => {
        //console.log(event.target.value)
        let keyword = event.target.value
        let filtered = this.state.news.filter((item)=> {
        return item.title.indexOf(keyword) > -1
        })

        this.setState({
            filtered
        })

        console.log(filtered)
    }

    render(){

        return(
            <div>
                <Header/>
                <Grid>
                    <NewGrid/>
                </Grid>
            </div>
            
            )

    }


}



ReactDOM.render(<App />, document.getElementById('root'));