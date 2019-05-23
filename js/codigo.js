var textNombre = document.getElementById("campoNombre");
textNombre.onblur = validarNombre;
function validarNombre() {
  if (textNombre.length === 0 || /^[0-9]+$/i.test(textNombre.value)) {
    document.getElementById("campoNombre").className="mal";
  } else {
    document.getElementById("campoNombre").className="bien";
  }
}
//Crear funciones para validar los datos introducidos en un formulario
function validacionDatos() {

    validarEdad();
    validarCiudad();
    validarTelefono();
}
// Función para validar que la edad introducida no este en blanco y sean números
var txtEdad = document.getElementById("campoEdad")

function validarEdad() {
    if (txtEdad === null || txtEdad.length === 0 || isNaN(txtEdad)) {
        alert('ERROR: Debes introducir una edad');
        return false;
    }
}

function validarCiudad() {
    let ciudad = document.getElementById("campoCiudad");
    const PATRON = /^\s+[0-9]\s+$/;

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
