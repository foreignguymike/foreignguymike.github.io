function handleMouse(event) {
	var canvas = document.querySelector('canvas');
	canvas.tabIndex = 1;
}

// if canvas is focused, stop moving around
function handleKey(event) {
	var canvas = document.querySelector('canvas');
	if (canvas == document.activeElement) {
		if (event.keyCode >= 37 && event.keyCode <= 40) {
			event.preventDefault();
		}	
	}
}