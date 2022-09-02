import React, {ChangeEvent, useReducer, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";

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

    const [value, setValue] = useState('')
    const ref = useRef<HTMLInputElement>(null)

    const onClickButton = () => {
        const el = ref.current as HTMLInputElement;
        setValue(el.value);
    }
    return <>
        <input ref={ref}/>
        <button onClick={onClickButton}> save</button>
        -- newValue: {value}
    </>
}
export const ControlledInputValue = () => {
    return <>
        <input value={'hello'}/>
    </>
}

export const ContInput = () => {

    const [value, setValue] = useState('')

    const onChangeHendler = (e: ChangeEvent<HTMLInputElement>) => {
        //    debugger
        setValue(e.currentTarget.value)
    }

    return <>
        <input value={value} onChange={onChangeHendler}/>
    </>
}
export const ControllCheckbox = () => {

    const [change, setChange] = useState(true)


    const onChecked = (e: ChangeEvent<HTMLInputElement>) => {
        setChange(e.currentTarget.checked)
    }

    return <>
        <input type={'checkbox'} checked={change} onChange={onChecked}/>
    </>
}

export const SelectOptions = () => {

    // const SelectOptions = React.memo(Select)

    const [select, setSelect]=useState<string | undefined>('2')

    const onChangeElement =(e: ChangeEvent<HTMLSelectElement>)=>{
        // debugger
         setSelect(e.currentTarget.value)
    }

    return <>
        <select value={select} onChange={ onChangeElement  }>
            <option value={'1'}>USA</option>
            <option value={'2'}>Canada</option>
            <option value={'3'}>Germany</option>
        </select>
    </>
}

