import React, { useState } from 'react';
import './Estilos.css';
import { Profile } from './Profile';

export const Home = () => {

    const [inputText, setInputText] = useState('');
    const [savedData, setSavedData] = useState(false);

    const handleInputChange = (e) => {
        const text = e.target.value
        setInputText(text);
        console.log(inputText);

        if(text === '') {
            setSavedData(false);
        }

    }

    const saveData = () => {
        localStorage.setItem('nombre', inputText);
        setSavedData(true);
    }

    return (
        <div className = 'container'>
            <input 
                className = 'input'
                onChange = { handleInputChange }
                placeholder = 'Ingresa tu nombre'
            />
            <button
                className = 'button'
                onClick = { saveData }
            >
                Guardar
            </button>

            {  <Profile /> }

        </div>
    )
}
