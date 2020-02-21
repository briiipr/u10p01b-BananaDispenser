import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChampionCard from './ChampionCard/championCard';

function FetchChampions() {
    const [data, setData] = useState([]);
    const imgRoute = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/';
    const terminacion = '_0.jpg';
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        axios.get('https://ddragon.leagueoflegends.com/cdn/10.4.1/data/es_ES/champion.json').then(result => { console.log(result.data.data); setData(result.data.data) });
    }, []);

    return (
        <div>
            {
                Object.entries(data).map(nombre => {
                    return (
                        ChampionCard(nombre[1], imgRoute + nombre[1].id + terminacion)
                    )
                })}
        </div>
    );
}

export default FetchChampions;