import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './championCard.css';

function ChampionCard(campeon, img) {
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
        <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{campeon.id}</Card.Title>
                <Button variant="primary">Saber más</Button>
            </Card.Body>
        </Card>
    );
}

export default ChampionCard;