import React, { Component } from 'react';

//const getYear = () => {
    //const newDate = new Date();
    //return newDate.getFullYear();
//}

class Header extends Component {

    render(){

        const styles = {

            header: {
                background: '#03a9f4'
            },
            logo:{
                 color: '#fff',
                 fontFamily: 'Anton',
                 textAlign: 'center'
            }

        }

        return (
            <header style={styles.header}>
                <div style={styles.logo}>Logo</div>
                <input type="text"/>
            </header>
        )
    }

}


export default Header;