import * as React from 'react';
import { useState } from 'react';

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
            {LoginComponent(isLogedIn)},
            <p id="saludo"></p>
            <ChampionPageComponent />
        </React.Fragment>
    )
}

/* ReactDOM.render(
    <CrearCuenta />,
    document.getElementById('login')
),

ReactDOM.render(
    <CrearCuenta />,
    document.getElementById('login')
);



ReactDOM.render(
    <OtrosLogs />,
    document.getElementById('otroslogs')
);

ReactDOM.render(
    <AccederTlfn />,
    document.getElementById('accedertlfn')
);

ReactDOM.render(
    <LogOut />,
    document.getElementById('logout')
); */

export default App;
