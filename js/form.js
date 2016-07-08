var seleccion = document.getElementById('como')
var infoOtros = document.getElementById('info-otros');
var areaTexto = document.getElementById('zona-texto');


seleccion.addEventListener('change', function(e){
	if (this.value == 'Otros') {
		infoOtros.style.display = 'block';
	} else {
		infoOtros.style.display = 'none';
	}
});

areaTexto.addEventListener('change', function(){
	var wordLen = 150;
	var len = this.value.split(/[\s]+/); 
    if(len.length -1 > wordLen){
    	alert("No está permitido escribir más de "+wordLen+" palabras.");
        return false;
    }
});