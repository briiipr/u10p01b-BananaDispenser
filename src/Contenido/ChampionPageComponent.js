import React, { useState, useEffect } from 'react';
import ChampionsC from './ChampionsContainer/championsC.js';
import ChampionsFilter from '../Filtros/filtersC.js';
import { ChampionsContextProvider } from '../championsContext.js';
import './ChampionPageComponent.css';

export default function ChampionPageComponent() {
    return (
        <div id="championPage">
            <ChampionsContextProvider>
                <ChampionsFilter />
                <ChampionsC />
            </ChampionsContextProvider>
        </div>
    )
}
