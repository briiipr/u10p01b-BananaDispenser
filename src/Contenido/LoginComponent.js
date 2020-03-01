import React, { useState } from 'react';

import CrearCuenta from '../Login/CrearCuenta.js';
import Acceder from '../Login/Acceder.js';
import AccederTlfn from '../Login/AccederTlfn.js';
import OtrosLogs from '../Login/OtrosLogins.js';
import LogOut from '../Login/LogOut.js';

export default function LoginComponent(props) {

    const [isLogedIn, setIsLogedIn] = useState(props)

    if (isLogedIn === true) {
        return (
            <React.Fragment>
                {
                    console.log('EL VALOR DE ISLOGEDIN ES: ' + isLogedIn)
                }
                <LogOut />
            </React.Fragment>
        )
    } else {
        return (

            <React.Fragment>
                {
                    console.log('EL VALOR DE ISLOGEDIN ES: ' + isLogedIn)
                }
                <CrearCuenta>{isLogedIn}</CrearCuenta>
                <Acceder isLogedIn={isLogedIn}/>
                <AccederTlfn isLogedIn={isLogedIn}/>
                <OtrosLogs isLogedIn={isLogedIn}/>
            </React.Fragment>
        )
    }
}