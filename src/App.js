import React, { useState} from 'react';
import ChampionsC from './Contenido/ChampionsContainer/championsC.js';
import ChampionsFilter from './Filtros/filtersC.js';
import { ChampionsContextProvider } from './championsContext.js';

export function App() {

    const [ isLogedIn, setIsLogedIn ] = useState(false);

    return (
        <ChampionsContextProvider>
            <ChampionsFilter />
            <ChampionsC />
        </ChampionsContextProvider>
    )
}

export default App;
