var textNombre = document.getElementById("campoNombre");
textNombre.onblur = validarNombre;
function validarNombre() {
  if (textNombre.length === 0 || /^[0-9]+$/i.test(textNombre.value)) {
    document.getElementById("campoNombre").className="mal";
  } else {
    document.getElementById("campoNombre").className="bien";
  }
}
