
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import FetchChampions from './Contenido/ChampionsContainer/championsC.js';


function App() {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <FetchChampions />
    );
}

export default App;
