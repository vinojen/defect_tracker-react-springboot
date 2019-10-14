
import React, { Component } from 'react';
import './header.css'


class Header extends Component {
    state = {  }
    render() { 
        return ( 
             <div>
                <div class="header">
                <a href="#" class="logo">Defect Tracker</a>
                <div class="header-right">
                    <a class ="active" href="#home">Home</a>
                    <a href="#">Login</a>
                   <a href="#">About</a>
            </div>
        
            </div>
            </div>

         );
    }
}
 
export default Header;
