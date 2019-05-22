//Crear funciones para validar los datos introducidos en un formulario

// Función para validar que la edad introducida no este en blanco y sean números
var txtEdad = document.getElementById("campoEdad")
function validarEdad() {
    if (txtEdad == null || txtEdad.length == 0 || isNaN(txtEdad)) {
        alert('ERROR: Debes introducir una edad');
        return false;
    }
}