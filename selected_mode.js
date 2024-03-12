var defaultDegrees = 0;

function changeModeRotate(direction) {
	var elts = [
		document.querySelector('#selected-mode-carousel .selected-background:nth-child(1)'),
		document.querySelector('#selected-mode-carousel .selected-background:nth-child(2)'),
		document.querySelector('#selected-mode-carousel .selected-background:nth-child(3)')
	]
	if (direction == 'previous') {
		defaultDegrees += 120;
	} else if (direction == 'next') {
		defaultDegrees -= 120;
	} else {
		defaultDegrees = defaultDegrees;
	}
	for (let i = 0; i < elts.length; i++) {
		elts[i].style.transition = '1.5s';
		elts[i].style.transform = `rotateY(${defaultDegrees + (i * 120)}deg) translateZ(120px)`;
		elts[i].addEventListener("transitionend", function transitionend(event) {
			if (event.propertyName == 'transform')
			{
				elts[i].style.transition = '.3s';
				elts[i].removeEventListener("transitionend", transitionend);
			}
		});

	}
}
