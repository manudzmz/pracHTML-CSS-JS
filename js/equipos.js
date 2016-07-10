
var escudos = document.getElementsByClassName('esc-equipos');
var sporting = document.getElementById('info-spo');
var manchester = document.getElementById('info-man');
var real = document.getElementById('info-rm');

for (var i = 0; i < escudos.length; i++) {
	escudos[i].addEventListener('mouseover', function(){
		this.nextElementSibling.style.display = 'block';
	});
}

for (var i = 0; i < escudos.length; i++) {
	escudos[i].addEventListener('mouseout', function(){
		this.nextElementSibling.style.display = 'none';
	});
}