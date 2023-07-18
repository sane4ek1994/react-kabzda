import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessageCounter = (props: { count: number }) => {
    console.log('Render count')
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: string[] }) => {
    console.log('Render users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

//Memoization! if props has not changed, render is not called
const Users = React.memo(UsersSecret)
const MessageCounter = React.memo(NewMessageCounter)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(10);
    const [users, setUsers] = useState(['Alex', 'Ksu', 'Lev', 'Alex', 'Andrey']);

    const incCounter = () => setCounter(counter + 1)
    const addNewUser = () => setUsers([...users, `Sveta ${Date.now()}`])

    return <>
        <button onClick={incCounter}>+</button>
        <button onClick={addNewUser}>Add users</button>
        <MessageCounter count={counter}/>
        <Users users={users}/>
    </>
}


