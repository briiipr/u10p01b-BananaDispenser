import React, { useState } from 'react';
import { ChampionsContext } from '../../championsContext.js';

export default function NameSort(funcion) {
    let { state, dispatch } = React.useContext(ChampionsContext);
    const [input, setInput] = useState(''); // '' is the initial state value
    return (
        <form>
            <label>Ordenar por: </label>
            <label for="az">A-Z</label>
            <input type="radio" id="az" value="A-Z" defaultChecked name="sort" onChange={e => {
                setInput(e.target.value)
                dispatch({ type: 'ordenaCampeones', payload: e.target.value })
            }}></input>
            <label for="az">Z-A</label>
            <input type="radio" id="az" value="Z-A" name="sort" onChange={e => {
                setInput(e.target.value)
                dispatch({ type: 'ordenaCampeones', payload: e.target.value })
            }}></input>
        </form>
    );
}