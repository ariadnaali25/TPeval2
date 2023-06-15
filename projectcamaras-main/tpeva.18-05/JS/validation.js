function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var dni = document.getElementById('dni').value;
    var gmail = document.getElementById('gmail').value;
    var empresa = document.getElementById('empresa').value;

    if (nombre === '' || apellido === '' || dni === '' || gmail === '' || empresa === '') {
      // Muestra un mensaje de error junto a los campos faltantes
      document.getElementById('error-nombre').textContent = nombre === '' ? 'Este campo es obligatorio' : '';
      document.getElementById('error-apellido').textContent = apellido === '' ? 'Este campo es obligatorio' : '';
      document.getElementById('error-dni').textContent = dni === '' ? 'Este campo es obligatorio' : '';
      document.getElementById('error-gmail').textContent = gmail === '' ? 'Este campo es obligatorio' : '';
      document.getElementById('error-empresa').textContent = empresa === '' ? 'Este campo es obligatorio' : '';

      // Detiene el envío del formulario
      return false;
    }
  return true;
  }