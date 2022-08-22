import React, {useState} from 'react';
import {OnnOff} from "./Off";

export default {
    title: 'OnnOff',
    component: OnnOff,
}

export const Onn = () => <OnnOff on={true} setOnn={()=>{}}/>

export const Off = () => <OnnOff on={false} setOnn={()=>{}}/>

export const OffOnn = () => {
    let [on, setON]=useState<boolean>(false)
    return <OnnOff on={on} setOnn={()=>{setON(!on)}}/>
}


// export const OnnOff = () => {
//
//     let [call, setCall]=useState<boolean>(true)
//
//     return <Accardion
//         collapsed={call}
//         titleValue={'Title list'}
//         onClick={() => setCall(!call)}
//         color={'red'}
//     />
// }