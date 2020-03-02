import * as React from 'react';
import { useState } from 'react';
import './App.css'
import ReactDOM from 'react-dom';

import LoginComponent from './Contenido/LoginComponent.js'
import ChampionPageComponent from './Contenido/ChampionPageComponent'


export function App() {

    const [isLogedIn, setIsLogedIn] = useState(false)



    return (       
      /*   ReactDOM.render(
            <Acceder isLogedIn={isLogedIn} />,
            document.getElementById('acceder')
        ), */
        <React.Fragment>
            <LoginComponent />
            <p id="saludo"></p>
            <ChampionPageComponent />
        </React.Fragment>
    )
}

export default App;
