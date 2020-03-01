import React, { Component } from 'react';
import fire from '../fire';
import limpia from '../limpia';
import './Login.css';

const expresionCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/
const expresionPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/

export default class CrearCuenta extends Component {

  /**
  * @author Cristian Martin Quintero 2 Daw A
  * @description Recoge el valor del email y la password si estan correcto, crea la cuenta en firebase 
  */
  registrar() {
    let email = document.getElementById("Correo").value;
    let password = document.getElementById("Pass").value;
    let mensajeError = "";
    if (expresionCorreo.test(email)) {
      if (expresionPassword.test(password)) {
        fire.auth().createUserWithEmailAndPassword(email, password)
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
              alert('La contraseña es debil');
            } else {
              alert(errorMessage);
            }
            console.log(error);
          })
          .then(result => {
            if (result != null) {
              document.getElementById("Correo").value = "";
              document.getElementById("Pass").value = "";
              let user = result.user;
              document.getElementById("saludo").innerHTML = `Bienvenido  ${user.email}`;
              limpia();
            }

          });
      } else
      mensajeError = "Contraseña introducida no valida, la longitud es de entre 8 y 15 con al menos una mayuscula, una minuscula, un numero y 1 caracter especial"
    } else
    mensajeError = "Correo electronico no valido"

    document.getElementById("Info").innerHTML = mensajeError
  }

  /**
  * @author Cristian Martin Quintero 2 Daw A
  * @description Muestra las demas formas de login y oculta el registrar usuario
  */
  registered() {
    document.getElementById("registrado").style.display = "flex"
    document.getElementById("registro").style.display = "none"
    document.getElementById("OtrosLogs").style.display = "flex"
    document.getElementById("Info").innerHTML = " "
    document.getElementById("saludo").innerHTML = " "
  }
  render() {
    return (
      <div>
        <div id="registro">
          <label for="Correo">Correo electronico</label>
          <input id="Correo" type="text" />
          <label for="Pass">Contraseña</label>
          <input id="Pass" type="password" />
          <button class="separa" onClick={this.registrar}>Registrar</button>
          <p>Si ya eres un BananaDispenser</p>
          <button onClick={this.registered}>Pincha aqui</button>
        </div>
        <p id="Info"></p>
      </div>
    );
  }
}