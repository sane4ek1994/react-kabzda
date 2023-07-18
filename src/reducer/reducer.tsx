type TAcion = {
    type: string
}

export type TState = {
    users: string[]
    collapsed: boolean
}
export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
export const ADDED_NEW_USER = 'ADDED_NEW_USER'
export const reducer = (state: TState, action: TAcion): TState => {
    console.log(`REDUCER START: ${state.collapsed}`)
    console.log(`REDUCER ARRAY: ${state.users}`)
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, collapsed: !state.collapsed}
        case ADDED_NEW_USER:
            return {...state, users: [...state.users, `New user ${Date.now()}`]}
        default:
            throw new Error('Ti pidor!')
    }
}