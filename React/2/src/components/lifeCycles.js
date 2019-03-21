import React, { Component } from 'react';

class Life extends Component {

    // 1 get default props

    // 2 set default state

    state = {

        title: 'Life Cycles'

    }

    render(){

        console.log(this.props)

        return(
            <div>
                <h3>{this.state.title}</h3>
            </div>
        )
    }

}

export default Life;