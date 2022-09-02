import React, {useMemo, useState} from 'react';


export default {
    title: 'Hook'
}

const Count = (props: { count: any }) => {
    return (
        <div>{props.count}</div>
    )
}
const UsersExample = (props: { users: Array<string> }) => {
    console.log('Hello')
    return (
        <div>
            {
                props.users.map((el, i) => <div>{el}</div>)
            }
        </div>
    )
}

const Users = React.memo(UsersExample)

export const Example = () => {

    const [count, setCount]=useState(0)
    const [users, setUsers]=useState(['Diam', 'Katya', 'Sveta'])
    return (
        <div>
            <button onClick={()=> setCount(count+1)}>+++</button>
            <Count count={count}/>
            <Users users={users}/>
        </div>
    )
}