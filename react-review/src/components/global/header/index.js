import React, { Component } from 'react';
import Nav from '../nav/';

class Header extends Component {

    constructor(){
        super();
        this.state = {
            logo : "http://www.gafollowers.com/wp-content/uploads/2014/09/tacovilla.jpg",
            logo2 : "https://images1.miaminewtimes.com/imager/u/745xauto/9315756/unspecified-2.jpeg"
        }

        this.updateLogo = this.updateLogo.bind(this);
    }

    updateLogo(){
        
        let logo1 = this.state.logo;
        let logo2 = this.state.logo2;

        this.setState({
            logo : logo2,
            logo2 : logo1
        })
        
    }

    render() {
        return (
            <header>
                <button onClick={this.updateLogo}>UPDATE THAT LOGO</button>
                <Nav logo={this.state.logo}/>
            </header>
        );
    }
}

export default Header;
