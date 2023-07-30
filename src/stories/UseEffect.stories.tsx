import {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const UseEffectExample = () => {
    const [counter, setCounter] = useState(0);
    const [fake, setFake] = useState(77);

    console.log('render component')

    useEffect(() => {
        console.log('useEffect counter')
        document.title = counter.toString()
        //api.get('')
        //setInterval()
        //indexedDB
        //document.getElement
    }, [counter])

    useEffect(() => {
        debugger
        console.log('useEffect fake')
        document.title = fake.toString()
        //Side effects
        //api.get('')
        //setInterval()
        //indexedDB
        //document.getElement
    }, [fake])

    // Запоними это про useEffect()

    useEffect(() => {
        console.log('useEffect срабатывает на каждый render компоненты, т.к не передали [] зависимостей')
        document.title = fake.toString()
    })

    useEffect(() => {
        console.log('useEffect срабатывает один раз при render компонент, т.к передали пустой [] зависимостей')
        document.title = fake.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect срабатывает один раз при render компонент, и каждый раз когда зависимось изменяется')
        document.title = fake.toString()
    }, [fake])

    return <>
        Counter:{counter} || Fake:{fake} <br/>
        <button onClick={() => setCounter(counter + 1)}>Counter +</button>
        <button onClick={() => setFake(fake + 1)}>Fake +</button>
    </>
}

export const ExampleTimer = () => {
    // const [counter, setCounter] = useState(0);
    // const [fake, setFake] = useState(77);
    //
    // console.log('ExampleTimer render')
    //
    // useEffect(() => {
    //     setInterval(() => {
    //         console.log(`tick: ${counter}`)
    //         setCounter(state => state + 1)
    //     }, 1000)
    // }, [])


    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    const addZero = (time: number): any => time >= 0 && time < 10 ? `0${time}` : time

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()

            setHours(addZero(date.getHours()))
            setMinutes(addZero(date.getMinutes()))
            setSeconds(addZero(date.getSeconds()))
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return <div>
        {`${hours}:${minutes}:${seconds}`}
    </div>
}