import React from 'react';
import {Clock} from "./UseEffectClock.stories";


export default {
    title: 'CLock/BaseExample',
    component: Clock
}

export const BaseExample = () => {
    return <div><Clock mode={'analog'}/></div>
}

export const DigitalExample = () => {
    return <div><Clock mode={'digital'}/></div>
}