import React, {useReducer} from 'react';

type ReducerStateProps = {
    count: number
}

type ReducerActionType = {
    type: string
}

const initialState = {count: 0};

function reducer(state:ReducerStateProps, action: ReducerActionType) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    );
}
