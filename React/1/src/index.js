import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//COMPONENTS
import Bar from './components/bar';
import Header from './components/header';
import NewsList from './components/news_list';
//JSON
import JSON from './db.json';
//CSS
import classes from '../src/css/styles.css'



class App extends Component {

    state = {
        news:JSON 
    }

    getKeyword = (event) =>{
        
        let keyword = event.target.value
        let filtered = this.state.news.filter((item)=>{

            return item.title.indexOf(keyword) > -1

        })
    }

    render() {
        return (
            
            <div>
                <Bar />
                <Header keywords={this.getKeyword}/>
                <NewsList news={this.state.news}>
                <h3 className={classes.tittle}>
                    The news are:
                </h3>
                </NewsList>
            </div>
        )
    }


}



ReactDOM.render(<App />, document.querySelector('#root'));