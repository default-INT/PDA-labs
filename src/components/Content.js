import React, {useContext, useEffect, useState} from "react";
import {UnitsAPI} from "../api/firebase-api/FireUnitsAPI";
import '../css/Content.css'
import {UnitsList} from "./UnitsList";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "./Loader";
import {AddForm} from "./AddForm";

const testUnits = [
    {
        id: 'unit1',
        inMs: 1,
        name: 'кг',
        description: 'Килограмм'
    },
    {
        id: 'unit2',
        inMs: 1000,
        name: 'км',
        description: 'Километр'
    },
    {
        id: 'unit3',
        inMs: 0.01,
        name: 'см',
        description: 'Сантиметр'
    },
]

export const Content = () => {
    const {readAllUnits, units, loading} = useContext(FirebaseContext)

    useEffect(() => {
        readAllUnits()
    }, [])

    // const [units, setUnits] = useState(testUnits)
    //UnitsAPI.getAll().then(units => setUnits(units))
    return (
        <main>
            <div className="content-fragment">
                <AddForm/>
                {loading ?
                    <UnitsList units={units} /> :
                    <Loader/>
                }
            </div>
        </main>
    )
}