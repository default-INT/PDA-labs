import React, {useReducer} from "react";
import {UnitsAPI} from "../../api/firebase-api/FireUnitsAPI";
import {ADD_UNIT, READ_ALL_UNITS, REMOVE_UNIT, SHOW_LOADER} from "../types";
import {FirebaseContext} from "./firebaseContext";
import {firebaseReducer} from "./firebaseReducer";


export const FirebaseState = ({children}) => {
    const initialState = {
        units: [],
        loading: false
    };
    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER});

    const readAllUnits = async () => {
        try {
            const payload = await UnitsAPI.getAll();

            dispatch({type: READ_ALL_UNITS, payload})
        } catch (e) {
            console.error(e)
        }
    }

    const addUnit = async unit => {
        try {
            const res = await UnitsAPI.addUnit(unit)
            console.log(unit)
            const payload = {
                ...unit,
                id: res.data.name
            }
            console.log(payload)
            dispatch({type: ADD_UNIT, payload});
        } catch (e) {
            console.error(e)
        }
    }

    const removeUnit = async unit => {
        const payload = await UnitsAPI.deleteUnit(unit.id)
        //TODO: check firebase result
        console.log(payload)
        dispatch({type: REMOVE_UNIT, payload});
    }

    return (
        <FirebaseContext.Provider value={{
            readAllUnits, addUnit, removeUnit,
            loading: state.loading,
            units: state.units
        }}>
            {children}
        </FirebaseContext.Provider>
    )

}