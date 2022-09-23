import React, {useEffect, useState} from 'react';
import {clearTimeout} from "timers";

export default {
    title: 'useEffect/clock'
}

export const Clock = () => {

    const [count, setCount] = useState(0)
    const [value, setValue]=useState<Date>(new Date)

    let time = value.toLocaleTimeString()


    useEffect(() => {
        setInterval(() => {
            setValue(new Date)
        }, 1000)
    }, [value])


    return <>
        <div>
            <h3>{count}</h3>
            <h3>{time}</h3>
            <button onClick={() => setCount(count + 1)}>inc</button>
            <button onClick={()=>setCount(0)}>dec</button>
        </div>
    </>
}