import React, {useState} from 'react';
import {AppProps, Father} from "./Star";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Star',
    component: Father,
}

let OnClick = action('want to change 1 - 4')

export const Star0 = () => <Father value={0} setValue={OnClick}/>
export const Star1 = () => <Father value={1} setValue={OnClick}/>
export const Star2 = () => <Father value={2} setValue={OnClick}/>
export const Star3 = () => <Father value={3} setValue={OnClick}/>
export const Star4 = () => <Father value={4} setValue={OnClick}/>

export const StarDefault = () => {
    let [value, setValue]=useState<AppProps>(0)
    return <Father value={value} setValue={setValue}/>
}