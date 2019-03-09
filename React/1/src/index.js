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
<<<<<<< HEAD
        news:JSON 

    getKeyword = (event) =>{
        
        let keyword = event.target.value
        let filtered = this.state.news.filter((item)=>{

            return item.title.indexOf(keyword) > -1
=======

        news:JSON,
        filtered:[] 
>>>>>>> 275b23849f649e63630d5421bfb0424211bb5e71

        })
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

    render() {

        let filteredNew = this.state.filtered;
        let newsOld = this.state.news;

        return (
            
            <div>
                <Bar />
<<<<<<< HEAD
                <Header keywords={this.getKeyword}/>
                <NewsList news={this.state.news}>
=======
                <Header keywords={this.getKeyword} />
                <NewsList news={filteredNew.length === 0 ? newsOld : filteredNew}>
>>>>>>> 275b23849f649e63630d5421bfb0424211bb5e71
                <h3 className={classes.tittle}>
                    The news are:
                </h3>
                </NewsList>
            </div>
        )
    }


}



ReactDOM.render(<App />, document.querySelector('#root'));