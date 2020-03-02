import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ChampionCard from './ChampionCard/championCard';
import { ChampionsContext } from '../../championsContext';
import { ChampionModalContext } from './ChampionModal/ChampionModalContext.js';
import ChampionModal from './ChampionModal/ChampionModal.js';
import './championsC.css';

export default function ChampionsC() {
    const imgRoute = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/';
    const terminacion = '_0.jpg';
    var inicio = true;
    let { state, dispatch } = React.useContext(ChampionsContext);
/*     let { stateModal, dispatchModal } = React.useContext(ChampionModalContext); */
    const [campeones, setCampeones] = useState(state);
   /*  const [ mostrarModal, setMostrarModal ] = useState(stateModal.mostrarModal) */

    useEffect(() => {
        if (inicio === true) {
            Axios.get('https://ddragon.leagueoflegends.com/cdn/10.4.1/data/es_ES/champion.json').then(result => {
                dispatch({ type: "inicio", payload: result.data.data });
                setCampeones(state);
            });
            inicio = false;
        }
    }, [])

    return (
        <div id="championsC">
            {
                console.log('Estado en el return: '),
                console.log(state),
                Object.entries(state).map((campeon) => {
                    return (
                        ChampionCard(campeon[1], imgRoute + campeon[1].id + terminacion)
                    )
                })
            }
          {/*   <ChampionModal
                show={true}
                onHide={() => false}
            /> */}
        </div>
        
    );
}