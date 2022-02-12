import React from "react";
import {Link} from 'react-router-dom'
import './Header.css'
import logo from './images and icons/apmlogo.png'

function Header(props){
    return(
        <div className="header">
            <div className="header-icon">
                <Link to="/">APMB</Link>
            </div>
            <ul>
                <li><Link to="/">Devices</Link></li>
                <li><Link to="/shop">Buy</Link></li>
                <li><Link to="/map">Map</Link></li>
                <li><Link to="/info">Info</Link></li>
            </ul>
        </div>
    )
}

export default Header;