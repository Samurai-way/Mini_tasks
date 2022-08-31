import React from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";


export default {
    title: 'Select/Select',
    component: Select,
}


let CallBack = action('number')

export const EmptyRating = () => <Select
    items={[
        {title: 'USA', value: ''},
        {title: 'Canada', value: ''},
        {title: 'Kiev', value: ''},
    ]}
    value={''}
    onChange={CallBack}

/>
