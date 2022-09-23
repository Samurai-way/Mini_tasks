import React, {useMemo, useState} from 'react';

export default {
    title: 'useState/useState'
}


function exam() {
    console.log('exam')
    return 1
}

export const Example = () => {
    console.log('Example')

    const [value, setValue] = useState(exam)

    return <>
        <h3>{value}</h3>
        <button onClick={() => setValue(value => value+1)}>inc</button>
    </>
}