import {LegacyRef, useEffect, useRef, useState} from "react";
import './styles.css'

export default {
    title: 'Clock demo'
}


type TClock = {
    hours: number
    minutes: number
    seconds: number
}

type TAnalogClock = {
    hourHandle: LegacyRef<HTMLDivElement> | null | undefined
    minuteHandle: LegacyRef<HTMLDivElement> | null | undefined
    secondHandle: LegacyRef<HTMLDivElement> | null | undefined
}

const addZero = (time: number): any => time >= 0 && time < 10 ? `0${time}` : time

const DiditalClock = ({hours, minutes, seconds}: TClock) => {
    console.log('render digital')
    return (
        <div className='time'>
            <span>{addZero(hours)}</span>:
            <span>{addZero(minutes)}</span>:
            <span>{addZero(seconds)}</span>
        </div>

    )
}
const AnalogClock = ({hourHandle, minuteHandle, secondHandle}: TAnalogClock) => {
    console.log('render analog')

    return (
        <div className="clock-container">
            <div className="clock">
                <div ref={hourHandle} className="hor" id="hor">
                    <div className="hr"/>
                </div>
                <div ref={minuteHandle} className="min" id="min">
                    <div className="mn"/>
                </div>
                <div ref={secondHandle} className="sec" id="sec">
                    <div className="sc"/>
                </div>
            </div>
        </div>
    )
}
export const Clock = () => {

    const [viewMode, setViewMode] = useState('Analog');
    const [date, setDate] = useState(new Date());

    // const [analogDate, setAnalogDate] = useState(new Date());

    let secondHandle = useRef<HTMLDivElement | null>(null);
    let minuteHandle = useRef<HTMLDivElement | null>(null);
    let hourHandle = useRef<HTMLDivElement | null>(null);

    let ss = date.getSeconds();
    let mm = date.getMinutes();
    let hh = date.getHours();

    useEffect(() => {
        const interval = setInterval(() => {

            if (secondHandle.current && minuteHandle.current && hourHandle.current) {
                secondHandle.current.style.transform = `rotateZ(${ss * 6}deg)`;
                minuteHandle.current.style.transform = `rotateZ(${mm * 6}deg)`;
                hourHandle.current.style.transform = `rotateZ(${hh * 30}deg)`;
                console.log(hh, mm, ss)
            }

            setDate(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [hh, mm, ss])

    return <>
        <button
            onClick={() => setViewMode(viewMode === 'Analog' ? 'Digital' : 'Analog')}>{`${viewMode} Mode >`}</button>
        {viewMode === 'Digital' ?
            <DiditalClock
                hours={hh}
                minutes={mm}
                seconds={ss}/>
            :
            <AnalogClock hourHandle={hourHandle} minuteHandle={minuteHandle} secondHandle={secondHandle}/>}

    </>
}
