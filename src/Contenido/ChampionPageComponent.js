import React, { useState, useEffect} from 'react';
import ChampionsC from './ChampionsContainer/championsC.js';
import ChampionsFilter from '../Filtros/filtersC.js';
import { ChampionsContextProvider } from '../championsContext.js';

export default function ChampionPageComponent(){
    return(
        <ChampionsContextProvider>
            <ChampionsFilter />
            <ChampionsC />
        </ChampionsContextProvider>
    )
}

