import React, {useState} from 'react';
import {Accardion, AccardionPropsType} from './Accardion';
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

export default {
    title: 'Accardion',
    component: Accardion,
}

let CallBack = action('want to change')

const Template:  Story<AccardionPropsType> = (args) => <Accardion {...args}/>

const callBackProps = {
    onClick: CallBack,
}

export const AccardionFalse = Template.bind({})

AccardionFalse.args = {
    ...callBackProps,
    color: 'red',
    collapsed: false,
    titleValue: 'Title List',
}

export const AccardionTrue = Template.bind({})
AccardionTrue.args = {
    ...callBackProps,
    color: 'red',
    collapsed: true,
    titleValue: 'Title List',
}




export const AccardionDefault = () => {

    let [call, setCall]=useState<boolean>(true)

    return <Accardion
        collapsed={call}
        titleValue={'Title list'}
        onClick={() => setCall(!call)}
        color={'red'}
    />
}



