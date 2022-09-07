import React, {useState} from 'react';

export default {
    title: 'useMemo'
}

export const Example = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    const resultA = 1;
    const resultB = 1;


    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={a} onChange={(e) => setB(Number(e.currentTarget.value))}/>


    </>


}