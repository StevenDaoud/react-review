import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
        <nav>
            <ul>
                <img alt="" src={this.props.logo}/>
                <li><Link to="/" >Taco</Link></li>
                <li><Link to="/images" >Taco Images</Link></li>
            </ul>
        </nav>
        );
    }
}

export default Nav;
