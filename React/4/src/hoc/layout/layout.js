import React, { Component } from 'react';
import './layout.css';
import Header from '../../components/header/header';
import Home from '../../components/home/home'
import Footer from '../../components/footer/footer';

class Layout extends Component{
    state= {

        showNav:false

    }

    toggleSidenav = (action) =>{

        this.setState({
            showNav:action
        })
    }

    render(){
        return( 
            <div>
                <Header
                    showNav={this.state.showNav}
                    onHideNav={() => this.toggleSidenav(false)}
                    onOpenNav={() => this.toggleSidenav(true)}
                />
                <Footer/>
                <Home/>
            </div>
        )
    }
}

export default Layout;