import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DufficultCountingExample = () => {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);

    let resA = 1
    let resB = 1

    resA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            resA = resA * i
        }
        return resA
    }, [a])

    // for (let i = 1; i <= a; i++) {
    //     let fake = 0
    //     while (fake < 10000000) {
    //         fake++
    //         const fakeValue = Math.random()
    //     }
    //     resA = resA * i
    // }

    for (let i = 1; i <= b; i++) {
        let fake = 0
        while (fake < 1000000) {
            fake++
            const fakeValue = Math.random()
        }
        resB = resB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <div>Result for a: {resA}</div>
        <div>Result for b: {resB}</div>
    </>
}

const UsersSecret = (props: { users: string[] }) => {
    console.log('Render users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

//Memoization! if props has not changed, render is not called
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(10);
    const [users, setUsers] = useState(['Alex', 'Ksu', 'Lev', 'Alex', 'Andrey']);

    const incCounter = () => setCounter(counter + 1)
    const addNewUser = () => setUsers([...users, `Sveta ${Date.now()}`])

    const newUsers = useMemo(() => {
       return users.filter(user => !user.toLowerCase().includes('a'))
    }, [users])

    return <>
        <button onClick={incCounter}>+</button>
        <button onClick={addNewUser}>Add users</button>
        {counter}
        <Users users={newUsers}/>
    </>
}

