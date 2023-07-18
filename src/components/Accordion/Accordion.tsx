import {useReducer} from "react";
import {ADDED_NEW_USER, reducer, TOGGLE_COLLAPSED} from "../../reducer/reducer";

type TAccordionProps = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: string[]
}


export function Accordion(props: TAccordionProps) {


    console.log('render reducer Accordion!')
    const [state, dispatch] = useReducer(reducer, {collapsed: false, users: props.items})

    const accordionBody = <ul>
        {state.users.map((el, i) => <li key={i}>{el}</li>)}
    </ul>
    const onCollapsed = () => {
        props.setCollapsed(!props.collapsed)
    }
    return (
        <div>
            <h2>{props.title}</h2>
            {/*useState*/}
            {/*<button onClick={onCollapsed}>{props.collapsed ? '-' : '+'}</button>*/}
            {/*useReducer*/}
            <button onClick={() => dispatch({type: TOGGLE_COLLAPSED})}>{state.collapsed ? '-' : '+'}</button>
            <button onClick={() => dispatch({type: ADDED_NEW_USER})}>Added new user</button>
            {!state.collapsed && accordionBody }
        </div>
    )
}





