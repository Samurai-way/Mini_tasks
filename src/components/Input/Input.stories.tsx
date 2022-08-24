import React, {useRef, useState} from 'react';

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

export const GetValue = () => {
    const [value, setValue]=useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save</button> - actual value: {value}
    </>
}