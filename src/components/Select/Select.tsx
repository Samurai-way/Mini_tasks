import  React, {useReducer, useState} from 'react';
import style from './Style.module.css';


type ItemsType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]
}

export type ReducePropsType = {
    type: 'TOGGLE'
}
export type ReducePropsTest = {
    collapsed: boolean
}

export const reducer = (state: boolean, action: ReducePropsType) => {
    switch (action.type){
        case 'TOGGLE':
            return !state
        default: throw new Error('Bad action')
    }
    return state
}

export const Select = (props: SelectPropsType) => {


    const selectedItem = props.items.find(i => i.value === props.value)

    // const [active, setActive] = useState(true)



    let [active, dispatch]=useReducer(reducer, true)

    const clickHendler = () => {
        dispatch({type: 'TOGGLE'})
    }

    const onItemsClick = (value: any) => {
        props.onChange(value)
        clickHendler()
    }

    return (
        <div className={style.select}>
            <div className={style.select + ' '}>
                <span className={style.main} onClick={clickHendler}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={style.items}>
                        {props.items.map(i => <div key={i.value}
                                                   onClick={()=>{onItemsClick(i.value)}}>{i.title}
                        </div>)}
                    </div>
                }
            </div>
        </div>
    );
};

