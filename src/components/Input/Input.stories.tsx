import React, {useRef, useState} from 'react';

export default {
    title: 'Input/UncontrolledInput',
}

export const UncontrolledInput = () => <input/>

export const TrackValueUncontrolledInput = () => {

    const [value, setValue] = useState('')

    return <>
        <input onChange={(event) => {
            const eventValue = event.currentTarget.value;
            setValue(eventValue)
        }}/> - {value}
    </>
}

export const GetValue = () => {

    const [value, setValue]=useState('')
    const ref = useRef<HTMLInputElement>(null)

    const onClickButton = () => {
        const el = ref.current as HTMLInputElement;
        setValue(el.value);
    }
    return <>
        <input ref={ref}/>
        <button onClick={onClickButton}> save </button> -- newValue: {value}
    </>
}