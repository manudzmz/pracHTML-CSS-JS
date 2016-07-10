$.webshims.polyfill('forms');

var seleccion = document.getElementById('como')
var infoOtros = document.getElementById('info-otros');
var areaTexto = document.getElementById('zona-texto');
var avisoPalabras = document.getElementById('aviso');


seleccion.addEventListener('change', function(){
	if (this.value == 'Otros') {
		infoOtros.style.display = 'block';
	} else {
		infoOtros.style.display = 'none';
	}
});

areaTexto.addEventListener('change', function(){
	var wordLen = 150;
	var len = this.value.split(/[\s]+/); 
    if(len.length > wordLen){
    	avisoPalabras.style.display = 'block';
    } else {
    	avisoPalabras.style.display = 'none';
    }
});

var form = document.getElementById('formulario');

form.addEventListener('submit', function(e){
	var inputNombre = document.getElementById('nombre');
	var inputApellidos = document.getElementById('apellidos');
	var inputEmail = document.getElementById('email');
	var inputTelefono = document.getElementById('telefono');

	if (inputNombre.checkValidity() == false) {
		alert('Escribe tu nombre');
		inputNombre.focus;
		e.preventDefault();
		return false;
	}

	if (inputApellidos.checkValidity() == false) {
		alert('Escribe tus apellidos');
		inputApellidos.focus;
		e.preventDefault();
		return false;
	}

	if (inputEmail.checkValidity() == false) {
		alert ('Escribe tu email');
		inputEmail.focus;
		e.preventDefault();
		return false;
	}

	if (inputTelefono.checkValidity() == false) {
		alert('Introduce tu número de teléfono');
		inputTelefono.focus;
		e.preventDefault();
		return false;
	}
})