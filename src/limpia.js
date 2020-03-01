function limpia() {
    document.getElementById("registrado").style.display = "none";
    document.getElementById("registradoTlfn").style.display = "none";
    document.getElementById("registro").style.display = "none";
    document.getElementById("OtrosLogs").style.display = "none";
    document.getElementById("verificacion").style.display = "none";
    document.getElementById("Logged").style.display = "flex";
    document.getElementById("Info").innerHTML = "";
    document.getElementById("contenidologin").style.display = "none";
    document.getElementById("saludo").style.display = "flex";
}
  
export default limpia