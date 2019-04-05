import React, { Component } from 'react';
import UserTemplate from './user_template';


class User extends Component {

    state = {
        name:'Camilo',
        lastname:'Jones',
        age: 25,
        hobbies:['run', 'jump'],
        spanish:true,
        message(){console.log('hey')},
        car:{brand:'Kia', model:'Celerio'},
        mother:'Luna',
        color: "red"
    }

    changeColor(){
        //this.setState({
        //    color:'blue'
        //})

        this.refs.myColor.style.color = 'blue'
    }

    render(){

        const style = {
            color: this.state.color
        }

        return (
            <div>
                <h4 ref="myColor" style={style}>{this.state.mother}</h4>
                <div onClick={()=>this.changeColor()}>Change Color</div>

                <UserTemplate {...this.state}/>
            </div>
        )
    }
}

export default User;