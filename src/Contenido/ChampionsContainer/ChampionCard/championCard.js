import React, { useState, useEffect } from 'react';

function FetchChampions(campeon, img) {
    return (
        <div class="card">
            <img src={img}></img>
            <p>{campeon.id}</p>
        </div>
    );
}

export default FetchChampions;