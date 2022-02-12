import {React, useState} from 'react'
import {Line} from 'react-chartjs-2'

function statistics(props){
    const [data, setDate] = useState([
        {
        co2=23,
        voc=23,
        temp=23
        }
    ])

    return(
        <div>
            <Line></>
        </div>
    )
}

export default statistics;