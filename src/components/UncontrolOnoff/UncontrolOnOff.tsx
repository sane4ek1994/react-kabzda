import React, {useState} from 'react';

type TProps = {
    toggleSwitch?: boolean
    setToggleSwitch?: (val: boolean) => void
}

export const UncontrolOnOff = ({setToggleSwitch, toggleSwitch}: TProps) => {
    const [on, setOn] = useState(false);


    const wrapper = {
        display: 'flex',
        alignItems: 'center'
    }
    const onBtn = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px',
        width: '30px',
        height: '15px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white'

    }
    const offBtn = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5px',
        padding: '5px',
        width: '30px',
        height: '15px',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicator = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        borderRadius: '20px',
        backgroundColor: on ? 'green' : 'red'
    }


    const onToggleClicker = () => {
        setOn(!on)
    }

    return (
        <div style={wrapper}>
            <div onClick={onToggleClicker} style={onBtn}>on
            </div>
            <div onClick={onToggleClicker} style={offBtn}>off
            </div>
            <div style={indicator}></div>
        </div>
    );
};

