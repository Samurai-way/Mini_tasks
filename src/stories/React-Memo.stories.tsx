import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

export const Example = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1;
    let resultB = 1;


    resultA = useMemo(()=>{
        for (let i = 1; i <=a ; i++) {
            let fake = 0;
            while( fake < 10) {
                fake++;
                const faceResult = Math.random()
            }
            resultA = resultA * i
        }
        return resultA
    }, [a])


    for (let i = 1; i <=b ; i++) {

        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>

        </>
}