






































//Crear funciones para validar los datos introducidos en un formulario
let ciudad = document.getElementById("campoCiudad");
const PATRON = /^\s+[0-9]\s+$/;
const validar = document.getElementById("campoCiudad");
validar.onblur = validarCiudad;

/*validaciones("campoCiudad", validarCiudad);

function validaciones(elemento, fx){
    const validar = document.getElementById(elemento);
    validar.onblur = fx;
}*/

function validarCiudad(evento){

    if (ciudad.value !== "" || !PATRON.test(ciudad.value)) {
        document.getElementById("campoCiudad").className = "bien";
    } else {
        document.getElementById("campoCiudad").className = "mal";
    }
}

function validarTelefono() {
    let telefono = document.getElementById("campoTelefono").value;
    const PATRON = /^5{3}\s\d{6}$/;

    if (PATRON.test(telefono)) {
        document.getElementById("campoTelefono").className = "bien";
    } else {
        document.getElementById("campoTelefono").className = "mal";

    }
}