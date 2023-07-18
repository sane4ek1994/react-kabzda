import {ADDED_NEW_USER, reducer, TOGGLE_COLLAPSED, TState} from "./reducer";

test('Testing Accordion reducer change value to opposite', () => {
    //data
    const state: TState = {
        users: ['Alex', 'Ksu', 'lev', 'Alex'],
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(() => reducer(state, {type: 'FAKE_TYPE'})).toThrowError()
    expect(newState.collapsed).toBe(true)
})


test('reducer should throw error because action type is incorrect', () => {
    //data
    const state: TState = {
        users: ['Alex', 'Ksu', 'lev', 'Alex'],
        collapsed: false
    }

    expect(() => reducer(state, {type: 'FAKE_TYPE'})).toThrowError()
})

test('reducer added new user to users array', () => {
    //data
    const state: TState = {
        users: ['Alex', 'Ksu', 'lev', 'Alex'],
        collapsed: false
    }

    const newState = reducer(state, {type: ADDED_NEW_USER})

    expect(state.users.length).toBe(4)
    expect(newState.users.length).toBe(5)
    expect(newState.users.length).not.toBe(6)
})
