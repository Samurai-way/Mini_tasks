import React, {useState} from 'react';

export default {
    title: 'Input/UncontrolledInput',
}

export const UncontrolledInput = () => <input/>

export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState("");
    return <>
        <input onChange={(event) => {
            const actialValue = event.currentTarget.value;
            setValue(actialValue);
        }}/> - {value}
    </>;
}