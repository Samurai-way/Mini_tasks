import React, {useEffect, useState} from 'react';
import './Clock.css'

export default {
    title: 'CLock/useEffect'

}

type ClockPropsType = {
    mode: 'digital' | 'analog'
}

export const Clock = (props: ClockPropsType) => {
    const [count, setCount] = useState(0)
    const [value, setValue]=useState<Date>(new Date)

    const data = new Date

    const secondsStyle = {
        transform: `rotate(${data.getSeconds() * 6}deg)`
    };

    let time = value.toLocaleTimeString()
    const minutesStyle = {
        transform: `rotate(${data.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${data.getHours() * 30}deg)`
    };

    useEffect(() => {
        console.log('effect')
        setInterval(() => {
            setValue(new Date)
        }, 1000)
    }, [])


    let analog
    switch (props.mode) {
        case 'analog':
            analog =  <div>
                <h3>{count}</h3>
                <h3>{time}</h3>
                <button onClick={() => setCount(count + 1)}>inc</button>
                <button onClick={()=>setCount(0)}>dec</button>
            </div>
        {break}
        case 'digital':
            analog = <div className={"clock"}>
                <div className={"analog-clock"}>
                    <div className={"dial seconds"} style={secondsStyle} />
                    <div className={"dial minutes"} style={minutesStyle} />
                    <div className={"dial hours"} style={hoursStyle} />
                </div>
                <div className={"digital-clock"}/>
            </div>
    }

    return <>
        {analog}
    </>
}