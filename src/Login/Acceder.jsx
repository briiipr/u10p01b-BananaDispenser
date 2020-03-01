import React, { Component } from 'react';
import fire from '../fire';
import limpia from '../limpia'
import './Login.css';

export default class Acceder extends Component {

  /**
  * @author Cristian Martin Quintero 2 Daw A
  * @description Recoge los valores de usuario y contraseña y comprueba en el servidor de firebase si existe dicho usuario
  */
  acceder() {
    let email = document.getElementById("Usuario").value;
    let password = document.getElementById("Contrasena").value;

    fire.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      if (errorCode == 'auth/invalid-email') {
        document.getElementById("Info").innerHTML = `El correo es invalido`;
      }
      console.log(error);
    })
      .then(result => {
        if (result != null) { 
          let user = result.user;
          document.getElementById("saludo").innerHTML = `Bienvenido ${user.email}`;
          limpia()
        } else {
          document.getElementById("Info").innerHTML = `Usuario o contraseña mal introducidos`;
        }
      });
  }

  render() {
    return (
      <div id="registrado" >
        <label for="Usuario">Correo electronico</label>
        <input id="Usuario" type="text" />
        <label for="Contrasena">Contraseña</label>
        <input id="Contrasena" type="password" />
        <button class="separa" onClick={this.acceder}>Acceder</button>
      </div>
    );
  }
}