import React, { Component } from 'react';
import fire from '../fire';
import firebase from 'firebase';
import limpia from '../limpia'
import './Login.css';

export default class AccederTlfn extends Component {

  /**
  * @author Cristian Martin Quintero 2 Daw A
  * @description Recoge el valor del prefijo y el telefono si esta correcto, llama al captcha y si esta bien manda un SMS con el codigo de verificación 
  */
  phoneAuth() {
    document.getElementById("recaptcha-container").style.display = "inline"
    let telefono = document.getElementById('telefono').value
    if(telefono.length === 9 && !(isNaN(telefono))) {
      let prefijo = document.getElementById('prefijo').value
      telefono = `+${prefijo}${telefono}`
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      var appVerifier = window.recaptchaVerifier;
      fire.auth().signInWithPhoneNumber(telefono, appVerifier)
        .then(function (confirmationResult) {
          document.getElementById("recaptcha-container").style.display = "none"
          document.getElementById("verificacion").style.display = "flex"
          window.confirmationResult = confirmationResult
        })
        .catch(function (error) {
          console.log(error)
          window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        });
    }
    else{
      document.getElementById("Info").innerHTML = "No has introducido un numero de telefono valido"
    }
  }

  /**
  * @author Cristian Martin Quintero 2 Daw A
  * @description Comprueba si el codigo introducido es igual al que se ha mandado en SMS
  */
  codeVerify() {
    var code = document.getElementById('Codigo').value
    window.confirmationResult.confirm(code)
      .then(function (result) {
        document.getElementById("verificacion").style.display = "none"
        document.getElementById("saludo").innerHTML = `Bienvenido ${document.getElementById('telefono').value}`;
        limpia();
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  /**
  * @author Cristian Martin Quintero 2 Daw A
  * @description Oculta el registro por telefono y muestra los otros
  */
  volver() {
    document.getElementById("registradoTlfn").style.display = "none";
    document.getElementById("OtrosLogs").style.display = "flex";
    document.getElementById("acceder").style.display = "flex";
  }

  render() {
    return (
      <div id="registradoTlfn" >
        <div>
        <label for="telefono">Introduzca su numero de telefono: </label>
        <select id="prefijo">
          <option value="34">+34</option> 
          <option value="33">+33</option>
          <option value="39">+39</option>
        </select>
        </div>
        <input class="separapoco" type="text" id="telefono" min="0" />
        <button class="separa" onClick={this.phoneAuth}>Enviar SMS</button>
        <button class="separa" onClick={this.volver}>Volver</button>
        <p id="recaptcha-container"></p>
        <div id="verificacion">
          <label for="Codigo">Codigo del sms</label>
          <input type="text" id="Codigo" />
          <button class="separa" onClick={this.codeVerify}>Comprobar</button>
        </div>
      </div>
    );
  }
}