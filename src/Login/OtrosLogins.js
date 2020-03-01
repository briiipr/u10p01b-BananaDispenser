import React, { Component } from 'react';
import fire from '../fire';
import firebase from 'firebase';
import limpia from '../limpia'
import './Login.css';

export default class OtrosLogins extends Component {

  /**
  * @author Cristian Martin Quintero 2 Daw A
  * @description Llama al metodo de login de github y nos devuelve un usuario asociado
  */
  gitHubSignin() {
    let provider = new firebase.auth.GithubAuthProvider();
    fire.auth().signInWithPopup(provider)
      .then(result => {
        let user = result.user;
        document.getElementById("saludo").innerHTML = `Bienvenido ${user.email}`;
        limpia()
      }

      ).catch(function (error) {
        var errorMessage = error.message;
        alert(errorMessage);
        console.log(error);
      });
  }

  /**
  * @author Cristian Martin Quintero 2 Daw A
  * @description Llama al metodo de login de twitter y nos devuelve un usuario asociado
  */
  twitterSignin() {
    let provider = new firebase.auth.TwitterAuthProvider();
    fire.auth().signInWithPopup(provider)
      .then(result => {
        let user = result.user;
        document.getElementById("saludo").innerHTML = `Bienvenido ${user.displayName}`;
        limpia()
      }

      ).catch(function (error) {
        var errorMessage = error.message;
        alert(errorMessage);
        console.log(error);
      });
  }

  telefonoSignin() {
    document.getElementById("registradoTlfn").style.display = "flex";
    document.getElementById("OtrosLogs").style.display = "none";
    document.getElementById("acceder").style.display = "none";
  }

  /**
  * @author Cristian Martin Quintero 2 Daw A
  * @description Muestra el crear usuario y oculta los demas tipos de login
  */
  crear() {
    document.getElementById("registrado").style.display = "none";
    document.getElementById("registradoTlfn").style.display = "none";
    document.getElementById("OtrosLogs").style.display = "none";
    document.getElementById("registro").style.display = "";
    document.getElementById("Info").innerHTML = " "
  }

  render() {
    return (
      <div id="OtrosLogs">
        <button id="botonGitHub" onClick={this.gitHubSignin}></button>
        <button id="botonTwitter" onClick={this.twitterSignin}></button>
        <button id="botonTelefono" onClick={this.telefonoSignin}></button>
        <button onClick={this.crear}>Nuevo usuario</button>
      </div>
    );
  }
}