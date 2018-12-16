// Variables
var navButton = document.querySelector('nav button')

// Toggle navigation lists
navButton.addEventListener('click', function(event) {
	var expanded = event.target.getAttribute('aria-expanded') === 'true' || false
	event.target.setAttribute('aria-expanded', !expanded)
	var menu = event.target.nextElementSibling
	menu.classList.toggle('hidden')
});
