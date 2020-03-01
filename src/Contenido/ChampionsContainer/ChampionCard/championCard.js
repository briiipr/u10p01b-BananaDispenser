import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './championCard.css';
import modalChampions from '../ModalChampions/modalChampions';


function ChampionCard(campeon, img) {
<<<<<<< HEAD
    
=======

>>>>>>> 647ea71baf5ea4b865ce0c4ef20d3b480ddbe5bb
    /* console.log('VALOR CAMPEON RECIBIDO: ')
    console.log(campeon)
    console.log('VALOR IMG: ' + img) */

    /*    return (
           console.log('SE ACTUALIZA ' + campeon),
           <label>Campeon.</label>
       );
       
       <div className="card">
               <img src={img}></img>
               <p>{campeon.id}</p>
           </div>
    */
    return (
        <Card text="white" className="text-center">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{campeon.id}</Card.Title>
                <button onClick={() => modalChampions(campeon.id)}>Saber más</button>
            </Card.Body>
        </Card>
    );
}

export default ChampionCard;