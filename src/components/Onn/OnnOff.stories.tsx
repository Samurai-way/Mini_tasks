import React, {useReducer, useState} from 'react';
import {OnnOff, ReducerPropsType} from "./Off";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnnOff',
    component: OnnOff,
}

let OnClick = action('want to ONN or OFF')

export const OffOnnExample = () => {

    const OffOnnExample = React.memo(OnnOff)

    const reducer = (state: boolean, action: ReducerPropsType) => {
        if(action.type === 'TOGGLE'){
            return !state
        }
        return state
    }
    let [on, dispatch]=useReducer(reducer, false)
    return <OnnOff on={on} setOnn={()=>{dispatch({type: 'TOGGLE'})}}/>
}
export const Onn = () => <OnnOff on={true} setOnn={OnClick}/>
export const Off = () => <OnnOff on={false} setOnn={OnClick}/>
