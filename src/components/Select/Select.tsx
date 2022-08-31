import React from 'react';

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
        <div>
            <select>
                <option value={''}>USA</option>
                <option value={''}>Canada</option>
                <option value={''}>Kiev</option>
            </select>
            <h3>{selectedItem && selectedItem.title}</h3>
                {props.items.map(i => <div>{i.value}</div>)}
        </div>
);
};

