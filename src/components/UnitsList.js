import React, {useContext} from "react";
import {FirebaseContext} from "../context/firebase/firebaseContext";

const UnitItem = props => {
    const {removeUnit} = useContext(FirebaseContext)
    const removeFunc = () => {
        removeUnit(props.unit)
    }
    return (
        <tr className="unit-item">
            <td>{props.name}</td>
            <td>{props.inMs}</td>
            <td>{props.description}</td>
            <td className='util-btn'>
                <a className='btn close' onClick={removeFunc}>X</a>
                {/*<a className='btn edit'>&#128736;</a>*/}
            </td>
        </tr>
    )
}

export const UnitsList = props => {
    return (
        <table className='units-list'>
            <tr className="header">
                <th>Наименование</th>
                <th>В СИ</th>
                <th>Описание</th>
                <th>Действие</th>
            </tr>
            {props.units.map(unit => (<UnitItem unit={unit} name={unit.name} inMs={unit.inMs} description={unit.description}/>))}
        </table>
    )
}