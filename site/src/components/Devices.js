import React from "react";
import Card from "./Card";
import "./Devices.css"

function Devices(props){
return(
    <div className="row">
            {props.tasks.map(function(item){
                return (
                    <div className="column">
                        <Card key={item.key} imageUrl={item.imageUrl} title={item.title} co2={item.co2} voc={item.voc} temp={item.temp}/>
                    </div>
                )
            })}
    </div>
)
}

export default Devices;