import React, {useState} from 'react';

export default {
    title: 'Input/UncontrolledInput',
}

export const UncontrolledInput = () => <input/>

export const TrackValueUncontrolledInput = () => {

    const [value, setValue]=useState('')

    return <>
        <input onChange={(event)=>{
            const eventValue = event.currentTarget.value;
            setValue(eventValue)
        }}/> - {value}
    </>
}