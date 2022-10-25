const trailer = document.getElementById("trailer");

window.onmousemove = (e) => {
  // use the offsetHeight/Width to set the trailer position to follow the mouse position
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  trailer.style.transform = `translate(${x}px, ${y}px`;
};
