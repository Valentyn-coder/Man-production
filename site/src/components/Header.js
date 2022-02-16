import React from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './Header.css'

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
                <li><Link to="/info">About</Link></li>
            </ul>
        </div>
    )
}

export default Header;