import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input type="text"/>
export const TrackValueinput = () => {
    const [value, setValue] = useState('value');
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <><input onChange={onChangeValue}
                    value={value}
                    type="text"/>--{value}</>
}

export const GetTrackValueInputByKeyPressUseRef = () => {
    const [value, setValue] = useState('Get value from ref');
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef} type="text"/>
        <button onClick={save}>save</button>
        --{value}</>
}
export const ControlledInput = () => <input value={'Controlled! You not change value!'} type="text"/>

export const ControlledCheckbox = () => {
    const [check, setCheck] = useState(false);
    const toggleCheck = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(e.currentTarget.checked)
    }

    return <input onChange={toggleCheck} checked={check} type={'checkbox'}/>
}


export const ControlledSelect = () => {
    const [selectValue, setSelectValue] = useState('2');

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.currentTarget.value)
    }

    return <select onChange={onChange} value={selectValue}>
        <option>none</option>
        <option value={'1'}>Moskow</option>
        <option value={'2'}>Penza</option>
        <option value={'3'}>Minsk</option>
        <option value={'4'}>Zarechniy</option>
    </select>
}

