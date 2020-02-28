import React, { useState, useEffect } from 'react';

function ChampionCard(campeon, img) {
    /* console.log('VALOR CAMPEON RECIBIDO: ')
    console.log(campeon)
    console.log('VALOR IMG: ' + img) */

 /*    return (
        console.log('SE ACTUALIZA ' + campeon),
        <label>Campeon.</label>
    );
 */
    return (
        <div className="card">
            <img src={img}></img>
            <p>{campeon.id}</p>
        </div>
    );
}

export default ChampionCard;