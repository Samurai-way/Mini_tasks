import React, {useState} from 'react';
import {OnnOff} from "./Off";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnnOff',
    component: OnnOff,
}

let OnClick = action('want to ONN or OFF')

export const Onn = () => <OnnOff on={true} setOnn={OnClick}/>

export const Off = () => <OnnOff on={false} setOnn={OnClick}/>

export const OffOnn = () => {
    let [on, setON]=useState<boolean>(false)
    return <OnnOff on={on} setOnn={()=>{setON(!on)}}/>
}

