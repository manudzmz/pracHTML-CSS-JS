// SMOOTH SCROLL
var navbarItems = document.getElementsByClassName('navbar-item');

for (var i=0; i < navbarItems.length; i++){
	navbarItems[i].addEventListener('click', function(e){

		deleteActiveClass();

		if (Modernizr.classList) {
			this.classList.add('active');
		} else {
		 	this.className += ' active';
		}

		var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');

		if (sectionToGo.length > 1) {
			e.preventDefault();
			var goTo = sectionToGo[sectionToGo.length-1]; 
			getElementByIdAndScroll(goTo);
		}
	});
}

function getElementByIdAndScroll (name) {
	var elem;

	if (name == '') {
		elem = document.getElementsByClassName('header')[0];
	} else {
		elem = document.getElementById(name);
	}
	scrollToElement(elem);
}

function scrollToElement (element) {
	var jump = parseInt(element.getBoundingClientRect().top * .3);
	document.body.scrollTop += jump;
	document.documentElement.scrollTop += jump;

	if (!element.lastJump || element.lastJump > Math.abs(jump)) {
		element.lastJump = Math.abs(jump);

		setTimeout(function() {
			scrollToElement(element);
		}, "60");
	} else {
		element.lastJump = null;
	}
}


// CHANGE ACTIVE ITEM
var cumulativeOffset = function(element) {
	var top = 0;
	do {
		top += element.offsetTop || 0;
		element = element.offsetParent;
	} while(element);

	return top;
};

var offsetQuienSoy = cumulativeOffset(document.getElementById('quien-soy')) - 65;
var offsetEquipos = cumulativeOffset(document.getElementById('equipos')) - 65;
var offsetExperiencia = cumulativeOffset(document.getElementById('experiencia')) - 65;
var offsetSobreMi = cumulativeOffset(document.getElementById('sobre-mi')) - 65;
var offsetContacto = cumulativeOffset(document.getElementById('contacto')) - 65;
var offsetFooter = cumulativeOffset(document.getElementById('pie')) - 65;
var navbar = document.getElementsByClassName('navbar')[0];

window.addEventListener('scroll', changeMenuStyle);

function changeMenuStyle(e) {
	var previous;

	if (window.pageYOffset >= 0 && window.pageYOffset < offsetQuienSoy) {
		if (!previous){
			previous = 1;
		} else if (previous == 1) {
			return false;
		}

		deleteActiveClass();
		if (Modernizr.classList) {
			document.querySelector('a[href$="inicio"]').parentNode.classList.add('active');
		} else {
			document.querySelector('a[href$="inicio"]').parentNode.className += ' active';
		}
		
	} else if (window.pageYOffset >= offsetQuienSoy && window.pageYOffset < offsetEquipos) {
		if (!previous){
			previous = 2;
		} else if (previous == 2) {
			return false;
		}
	
		deleteActiveClass();
		if (Modernizr.classList) {
			document.querySelector('a[href$="quien-soy"]').parentNode.classList.add('active-reverse');
		} else {
			document.querySelector('a[href$="quien-soy"]').parentNode.className += ' active';
		}
		
	} else if (window.pageYOffset >= offsetEquipos && window.pageYOffset < offsetExperiencia) {
		if (!previous){
			previous = 3;
		} else if (previous == 3) {
			return false;
		}
		
		deleteActiveClass();
		if (Modernizr.classList) {
			document.querySelector('a[href$="equipos"]').parentNode.classList.add('active');
		} else {
			document.querySelector('a[href$="equipos"]').parentNode.className += ' active';
		}

	} else if (window.pageYOffset >= offsetExperiencia && window.pageYOffset < offsetSobreMi) {
		if (!previous){
			previous = 3;
		} else if (previous == 3) {
			return false;
		}
		
		deleteActiveClass();
		if (Modernizr.classList) {
			document.querySelector('a[href$="experiencia"]').parentNode.classList.add('active');
		} else {
			document.querySelector('a[href$="experiencia"]').parentNode.className += ' active';
		}
		
	} else if (window.pageYOffset >= offsetSobreMi && window.pageYOffset < offsetContacto) {
		if (!previous){
			previous = 4;
		} else if (previous == 4) {
			return false;
		}
		
		deleteActiveClass();
		if (Modernizr.classList) {
			document.querySelector('a[href$="sobre-mi"]').parentNode.classList.add('active');
		} else {
			document.querySelector('a[href$="sobre-mi"]').parentNode.className += ' active';
		}
		
	} else if (window.pageYOffset >= offsetContacto && window.pageYOffset < offsetFooter) {
		if (!previous){
			previous = 5;
		} else if (previous == 5) {
			return false;
		}
		
		deleteActiveClass();
		if (Modernizr.classList) {
			document.querySelector('a[href$="contacto"]').parentNode.classList.add('active');
		} else {
			document.querySelector('a[href$="contacto"]').parentNode.className += ' active';
		}
		
	} 
}

function deleteActiveClass() {
	for (var i=0; i < navbarItems.length; i++){
		if (Modernizr.classList) {
			navbarItems[i].classList.remove('active');
		} else {
			navbarItems[i].className = ' navbar-item item';
		}
		
	}
}