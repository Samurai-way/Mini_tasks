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
    console.log('klick')
    const [count, setCount]=useState(0)
    const [users, setUsers]=useState(['Diam', 'Katya', 'Sveta'])

    const addUser = () => {
        const newUser = [...users, 'Dimaaa' + new Date().getTime()]
        setUsers(newUser)
    }

    const filt = useMemo(()=>{
        return users.filter(el => el.toLowerCase().indexOf('a')> -1)
    },[users])

    return (
        <div>
            <button onClick={()=> setCount(count+1)}>+++</button>
            <button onClick={addUser}>addUser</button>
            <Count count={count}/>
            <Users users={filt}/>
        </div>
    )
}