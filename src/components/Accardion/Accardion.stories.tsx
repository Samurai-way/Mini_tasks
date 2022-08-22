import React, {useState} from 'react';
import {Accardion} from './Accardion';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accardion',
    component: Accardion,
}

let CallBack = action('want to change')

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



