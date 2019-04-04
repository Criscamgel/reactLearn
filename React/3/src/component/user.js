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
        car:{brand:"Kia", model:"Celerio"},
        mother:"Luna"
    }

    render(){
        return (
            <div>
                <UserTemplate {...this.state}/>
            </div>
        )
    }
}

export default User;