











//Crear funciones para validar los datos introducidos en un formulario


function validacionDatos(){


    validarCiudad();
    validarTelefono();
}

function validarCiudad(){
    let ciudad = document.getElementById("campoCiudad");
    const PATRON = /^\s+[0-9]\s+$/;

    if (ciudad.value!=="" || !PATRON.test(ciudad.value)){
        document.getElementById("campoCiudad").className = "bien";
    } else {
        document.getElementById("campoCiudad").className = "mal";
    }
}

function validarTelefono(){
    let telefono = document.getElementById("campoTelefono").value;
    const PATRON = /^5{3}\s\d{6}$/;

    if (PATRON.test(telefono)){
        document.getElementById("campoTelefono").className = "bien";
    } else {
        document.getElementById("campoTelefono").className = "mal";
    }
}