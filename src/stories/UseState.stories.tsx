import React, {useState} from 'react';

export default {
    title: 'useState/useState'
}

export const Example = () => {
    console.log('Example')
    const [value, setValue]=useState(0)

    const set = (value: number) => {
        return value + 1
    }

    return <>
        <h3>{value}</h3>
        <button onClick={()=>setValue(set)}>inc</button>
    </>
}