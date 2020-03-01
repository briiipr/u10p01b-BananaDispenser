import React, { useState, useEffect } from 'react';
import NameFilter from './txt-Nombre/nameFilter.js';
import NameSort from './radio-OrdenNombres/nameSort.js';
import Image from 'react-bootstrap/Image';
import './filtersC.css';

/* Controlar aqui o en los hijos si no hay filtro que se devuelva el original */

export default function FilterChampions(campeon, img) {
    return (
        <div id="contenedorFiltros">
            <React.Fragment>
                <Image src="/images/img/LogoRedondoBananaDispenser.png" roundedCircle />
                <NameFilter />
                <NameSort />
            </React.Fragment>
        </div>

    );
}