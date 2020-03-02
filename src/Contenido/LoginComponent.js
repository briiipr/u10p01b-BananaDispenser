import React, { useState } from 'react';

import CrearCuenta from '../Login/CrearCuenta.js';
import Acceder from '../Login/Acceder.js';
import AccederTlfn from '../Login/AccederTlfn.js';
import OtrosLogs from '../Login/OtrosLogins.js';
import LogOut from '../Login/LogOut.js';

export default function LoginComponent(props) {

    return (

        <React.Fragment>
            <CrearCuenta />
            <Acceder />
            <AccederTlfn />
            <OtrosLogs />
            <LogOut />
        </React.Fragment>
    )
}