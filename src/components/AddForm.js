import React, {useContext} from "react";
import {FirebaseContext} from "../context/firebase/firebaseContext";


export const AddForm = () => {
    const {addUnit} = useContext(FirebaseContext)
    const addFunc = () => {
        const inputNameDOM = document.querySelector('.add-form input[name="name"]')
        const inputInMsDOM = document.querySelector('.add-form input[name="inMs"]')
        const inputDescriptionDOM = document.querySelector('.add-form input[name="description"]')

        const name = inputNameDOM.value
        const inMs = parseFloat(inputInMsDOM.value)
        const description = inputDescriptionDOM.value

        addUnit({
            name, inMs, description
        })
        inputNameDOM.value = ''
        inputInMsDOM.value = ''
        inputDescriptionDOM.value = ''
    }
    return (
        <form className='add-form'>
            <input name='name' type="text" placeholder='Введите наименование'/>
            <input name='inMs' type="text" placeholder='Введите значение в СИ'/>
            <input name='description' type="text" placeholder='Введите описание'/>
            <button type='button' onClick={addFunc}>Добавить</button>
        </form>
    )
}