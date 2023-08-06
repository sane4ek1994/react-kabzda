import React, {useEffect, useState} from 'react';
import './styles.css'

export const Clock = () => {
    const [date, setDate] = useState(new Date());


    const addZero = (time: number) => {
        return time < 10 ? `0${time}` : time
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
            console.log('TICK')
        }, 1000)

        return () => clearInterval(interval)
    })

    return (
        <div className={'time'}>
            <span>{addZero(date.getHours())}</span>:
            <span>{addZero(date.getMinutes())}</span>:
            <span>{addZero(date.getSeconds())}</span>
        </div>
    );
};
