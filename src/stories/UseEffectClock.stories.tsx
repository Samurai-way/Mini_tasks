import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect/clock'
}

export const Clock = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setCount(state => state + 1)
        }, 1000)
    }, [])

    return <>
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>inc</button>
        </div>
    </>
}