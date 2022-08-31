import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";


export default {
    title: 'Select/Select',
    component: Select,
}


let CallBack = action('number')

export const EmptyRating = () => {
    const [value, setValue] = useState('2')

    return <Select
        items={[
            {title: 'USA', value: '1'},
            {title: 'Canada', value: '2'},
            {title: 'Kiev', value: '3'},
        ]}
        value={value}
        onChange={setValue}

    />
}