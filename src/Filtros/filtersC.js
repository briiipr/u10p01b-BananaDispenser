import React, { useState, useEffect } from 'react';
import NameFilter from './txt-Nombre/nameFilter.js';

/* Controlar aqui o en los hijos si no hay filtro que se devuelva el original */

export default function FilterChampions(campeon, img) {
    return (
        <React.Fragment>
            <NameFilter />

        </React.Fragment>
    );
}