import React from 'react';
import {Father} from "../Star/Star";
import {action} from "@storybook/addon-actions";


export default {
    title: 'SelectStories/Select',
    component: Father,
}


let CallBack = action('want to change')

export const EmptyRating = () => <Father value={0} setValue={CallBack}/>
