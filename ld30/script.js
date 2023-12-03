function handleMouseDown(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  window.focus();
}

function handleMouseUp(evt) {
  evt.preventDefault();
  evt.stopPropagation();
}

document.addEventListener('contextmenu', event => event.preventDefault());
document.getElementById('embed-html').addEventListener('mousedown', handleMouseDown, false);
document.getElementById('embed-html').addEventListener('mouseup', handleMouseUp, false);