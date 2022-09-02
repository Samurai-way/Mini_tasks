import React from 'react';


export default {
    title: 'Hook',

}


const Count = (props: any) => {
    return(
        <div>{props.count}</div>
    )
}

const Users = (props: {users: Array<string>}) => {
    return(
        <div>
            {
                props.users.map((el,index) => <div>{el}</div>)
            }
        </div>
    )
}

export const Example = () => {
    return(
        <div>
            <Count count={10}/>
            <Users users={['Artur', 'Dima', 'Sveta']}/>
        </div>
    )
}