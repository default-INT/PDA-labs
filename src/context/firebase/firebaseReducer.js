import {ADD_UNIT, READ_ALL_UNITS, REMOVE_UNIT, SHOW_LOADER} from "../types";


const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: false}),
    [ADD_UNIT]: (state, {...payload}) => ({
        ...state,
        units: [...state.units, payload.payload]
    }),
    [READ_ALL_UNITS]: (state, {payload}) => ({...state, units: payload, loading: true}),
    [REMOVE_UNIT]: (state, {payload}) => {
        console.log('payload: ' + payload)
        return ({
            ...state,
            units: state.units.filter(unit => unit.id !== payload)
        })
    },
    DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}