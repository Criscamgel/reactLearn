import React from 'react';
import ReactDOM from 'react-dom';
//COMPONENTS
import Bar from './components/bar';
import Header from './components/header';

const App = () => {

    return (

        <div>
            <Bar />
            <Header />
        </div>
    )


}

ReactDOM.render(<App />, document.querySelector('#root'));