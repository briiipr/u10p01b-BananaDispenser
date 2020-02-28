import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChampionsContext } from '../../championsContext.js';
import ChampionsC from '../../Contenido/ChampionsContainer/championsC.js';

export default function FilterName(funcion) {
    let { state, dispatch } = React.useContext(ChampionsContext);
    const [input, setInput] = useState(''); // '' is the initial state value
    return (
        <div>
            <label>Introduzca nombre de campeón: </label>
            <input value={input} onChange={e => {
                setInput(e.target.value)
                dispatch({type: 'filtraNombre', payload: e.target.value})
            }} />
            <label>{input}</label>
        </div>
    );
}