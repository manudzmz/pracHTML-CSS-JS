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