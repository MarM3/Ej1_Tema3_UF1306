<<<<<<< HEAD
=======
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
>>>>>>> 979294fc184c78797a65a00b7e65d4ae3efcf18f





























let txtEdad = document.getElementById("campoEdad");
const patron = /^\d[1-9]{1, 3}$/;
txtEdad.onblur = validarEdad;

function validarEdad() {
   if (txtEdad.value === "" || patron.test(txtEdad.value)) {
       document.getElementById("campoEdad").className = "mal";
   } else {
       document.getElementById("campoEdad").className = "bien";
   }
}

//Crear funciones para validar los datos introducidos en un formulario
const ciudad = document.getElementById("campoCiudad");
ciudad.onblur = validarCiudad;

function validarCiudad(){
    ciudad.value = ciudad.value.trim(); //le quitamos los espacios por delante y por detrás
    const PATRON = /^\s+[0-9]+\s+$/;
    const PATRON2 = /^[A-Za-zÑñÁáÉéÍíÓóÚúüÜ]+$/;

    if (ciudad.value && PATRON2.test(ciudad.value))) {// || !PATRON.test(ciudad.value)  || !PATRON2.test(ciudad.value
        document.getElementById("campoCiudad").className = "bien";
    } else {
        document.getElementById("campoCiudad").className = "mal";
    }
}

const telefono = document.getElementById("campoTelefono");
telefono.onblur = validarTelefono;

function validarTelefono() {
    const PATRON = /^5{3}\s\d{6}$/;

    if (PATRON.test(telefono.value)) {
        document.getElementById("campoTelefono").className = "bien";
    } else {
        document.getElementById("campoTelefono").className = "mal";

    }
}
