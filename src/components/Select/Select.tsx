import React, {useState} from 'react';
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
    const [active, setActive] = useState(true)
    const clickHendler = () => {
        setActive(!active)
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

