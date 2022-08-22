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
export const Accardion2 = Template.bind({})
Accardion2.args = {

}

export const AccardionFalse = () => <Accardion collapsed={false}
                                               titleValue={'Title list'}
                                               onClick={CallBack}
                                               color={'red'}
/>
export const AccardionTrue = () => <Accardion collapsed={true}
                                               titleValue={'Title list'}
                                               onClick={CallBack}
                                               color={'red'}
/>

export const AccardionDefault = () => {

    let [call, setCall]=useState<boolean>(true)

    return <Accardion
        collapsed={call}
        titleValue={'Title list'}
        onClick={() => setCall(!call)}
        color={'red'}
    />
}



