import React from 'react';
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


export const Select = (props: SelectPropsType) => {

    const selectedItem = props.items.find(i => i.value === props.value)

    return (
        <div className={style.select}>
            <select>
                <option value={''}>USA</option>
                <option value={''}>Canada</option>
                <option value={''}>Kiev</option>
            </select>
            <div className={style.select + ' ' + style.active}>
                <h3>{selectedItem && selectedItem.title}</h3>
                <div className={style.items}>
                    {props.items.map(i => <div>{i.title}</div>)}
                </div>
            </div>
        </div>
    );
};

