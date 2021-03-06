import React, { useState, useEffect } from 'react';
import { ChampionsContext } from '../../championsContext.js';
import './nameFilter.css';

export default function FilterName(funcion) {
    let { state, dispatch } = React.useContext(ChampionsContext);
    const [input, setInput] = useState(''); // '' is the initial state value
    return (
        <div id="nameFilterDiv">
            <label>Introduzca nombre de campeón: </label>
            <input value={input} onChange={e => {
                setInput(e.target.value)
                dispatch({type: 'filtraNombre', payload: e.target.value.trim()})
            }} />
        </div>
    );
}