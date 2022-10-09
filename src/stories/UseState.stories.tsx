import React, {useEffect, useMemo, useState} from 'react';

export default {
    title: 'useState/useState'
}


function exam() {
    console.log('exam')
    return 1
}

export const Example = () => {
    console.log('Example')

    const [value, setValue] = useState(exam)

    useEffect(()=>{
        console.log('click')
       return () => {
           console.log('reset clock')
       }
    },[value])

    return <>
        <h3>{value}</h3>
        <button onClick={() => setValue(value => value+1)}>inc</button>
    </>
}

export const Input = () => {

    const [value, setValue] = useState('')

    useEffect(()=>{
        const timerID = setTimeout(()=>{
            console.log('new text')
            setValue('new text')
        }, 2000)
        window.addEventListener('keypress', (e)=>{
            setValue((state)=>state + e.key)
        })
        return ()=>{
            clearTimeout(timerID)
        }
    },[])

    return <>
        <h1>Typed text: {value}</h1>
    </>
}