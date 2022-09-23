import React, {useEffect, useMemo, useState} from 'react';

export default {
    title: 'useEffect/useEffect'
}



export const Stories = () => {
    console.log('ky')
    const [value, setValue] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log('effect')
        document.title = value.toString()
    })

    useEffect(()=>{
        console.log('value change')
    },[])

    useEffect(()=>{
        console.log('count change')
    },[count])

    return <>
        <h3>{value}</h3>
        <h3>{count}</h3>
        <button onClick={() => setValue(value+1)}>inc value</button>
        <button onClick={() => setCount(count+1)}>inc count</button>
    </>
}