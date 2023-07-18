import React from 'react';

type TProps = {
    toggleSwitch: boolean
    /**
     * CallBack Description
     */
    setToggleSwitch: (val: boolean) => void
}
export const ControlOnOff = ({toggleSwitch, setToggleSwitch}: TProps ) => {

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
        backgroundColor: toggleSwitch ? 'green' : 'white',
        borderRadius: '20px'

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
        backgroundColor: toggleSwitch ? 'white' : 'red',
        borderRadius: '20px'
    }
    const indicator = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        borderRadius: '20px',
        backgroundColor: toggleSwitch ? 'green' : 'red'
    }

    const onToggleSwitcher = () => {
        // чисто для вкл и выкл когда кликаем по одной и той же кнопке
        setToggleSwitch(!toggleSwitch)
    }

    return (
        <div style={wrapper}>
            <div onClick={onToggleSwitcher} style={onBtn}>on
            </div>
            <div onClick={onToggleSwitcher} style={offBtn}>off
            </div>
            <div style={indicator}></div>
        </div>
    );
};

