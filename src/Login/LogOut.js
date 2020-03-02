import React, { Component } from 'react';
import fire from '../fire';
import './Login.css';

export default class LogOut extends Component {

  /**
  * @author Cristian Martin Quintero 2 Daw A
  * @description Deslogea al usuario, limpia los campos de login y los muestra
  */
  logout() {
    document.getElementById("Correo").value = "";
    document.getElementById("Pass").value = "";
    document.getElementById("Usuario").value = "";
    document.getElementById("Contrasena").value = "";
    document.getElementById("Codigo").value = "";
    document.getElementById("telefono").value = "";

    fire.auth().signOut().then(function () {
      document.getElementById("Info").innerHTML = `Ha cerrado su sesión.`;
      document.getElementById("registrado").style.display = "none";
      document.getElementById("registradoTlfn").style.display = "none";
      document.getElementById("registro").style.display = "flex";
      document.getElementById("OtrosLogs").style.display = "none";
      document.getElementById("Logged").style.display = "none";
      document.getElementById("championPage").style.display = "none";
      document.getElementById("saludo").style.display = "none";
      document.getElementById("saludo").innerHTML = "";
    })
      .catch(console.log);
  }

  render() {
    return (
      <div id="logout">
        <div>
          <button id="Logged" onClick={this.logout}>Logout</button>
        </div>
      </div>
    );
  }
}