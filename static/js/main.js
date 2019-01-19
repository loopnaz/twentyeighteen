// Variables
var navButton = document.querySelector('nav button')
var prayerWalkDay = document.getElementById('prayerWalkDay')
var oneDay = 24*60*60*1000 // hours*minutes*seconds*milliseconds
var skipDays = 3 // Nov 22–24, 2018
var startPrayerWalk = new Date(2018,07,01) // Aug 1, 2018
var today = new Date

// Toggle navigation lists
navButton.addEventListener('click', function(event) {
	var expanded = event.target.getAttribute('aria-expanded') === 'true' || false
	event.target.setAttribute('aria-expanded', !expanded)
	var menu = event.target.nextElementSibling
	menu.classList.toggle('hidden')
})

// Add Prayer Walk Count
//var count = Math.round(Math.abs((today.getTime() - startPrayerWalk.getTime() - (oneDay * skipDays))/(oneDay)))
var count = Math.round(Math.abs(((today - startPrayerWalk) - (oneDay * skipDays))/(oneDay)) + 1)

var animateCount = function(elem, start, end, duration) {
	var range = end - start
    var current = start
    var increment = end > start? 1 : -1
    var stepTime = Math.abs(Math.floor(duration / range))
    var timer = setInterval(function() {
        current += increment;
        elem.innerHTML = current
        if (current == end) {
            clearInterval(timer)
        }
    }, stepTime)
}

// Test for prayerWalkDay element
var checkDOM = function() {
	if (!prayerWalkDay) return
	prayerWalkDay.innerHTML = animateCount(prayerWalkDay,0,count,2018)
}

checkDOM()
