import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CrearCuenta from './Login/CrearCuenta';
import Acceder from './Login/Acceder';
import AccederTlfn from './Login/AccederTlfn';
import OtrosLogs from './Login/OtrosLogins';
import LogOut from './Login/LogOut';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <CrearCuenta />,
  document.getElementById('login')
);

ReactDOM.render(
  <Acceder />,
  document.getElementById('acceder')
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
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();