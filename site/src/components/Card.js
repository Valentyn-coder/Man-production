import React from "react";
import {Link} from "react-router-dom"
import './Card.css'

function Card(props){
    return(
        <div className="card-container">
            <div className="image-container">
                <img src={props.imageUrl} alt=""/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{props.title}</h3>
                </div>
                <div>
                    <ul className="measures">
                        <li>CO2: {props.co2} PPM</li>
                        <li>VOC: {props.voc} PPB</li>
                        <li>Temperature: {props.temp} °C</li>
                    </ul>
                </div>
            </div>
            <div className="btn">
                <Link to={{pathname: `/settings`, name: props.title}}>Settings</Link>
            </div>
            <div className="btn">
                <Link to={{pathname: `/statistics`, name: props.title}}>More statistic</Link>
            </div>
        </div>
    )
}

export default Card;