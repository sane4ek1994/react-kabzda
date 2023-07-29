import {useMemo, useState} from "react";

export default {
    title: 'UseState Demo'
}

const generateData = (a: number, b: number): number => {
    console.log('generate data')
    return a * b
}
export const UseStateDemo = () => {
    console.log('render useState demo')

    // const initialData = useMemo(() => generateData(7, 10), [])

    const [count, setCount] = useState(generateData(8, 8));
    return (
        // в setCounter можно передать callback для изменения значения в нем
        <button onClick={() => setCount(state => state + 1)}>{count} inc</button>
    )
}




