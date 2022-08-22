import React, {useState} from 'react';
import {Accardion} from './Accardion';

export default {
    title: 'Accardion',
    component: Accardion,
}

export const AccardionFalse = () => <Accardion collapsed={false}
                                               titleValue={'Title list'}
                                               onClick={()=>{}}
                                               color={'red'}
/>
export const AccardionTrue = () => <Accardion collapsed={true}
                                               titleValue={'Title list'}
                                               onClick={()=>{}}
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



