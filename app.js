const trailer = document.getElementById("trailer");

window.onmousemove = (e) => {
  // use the offsetHeight/Width to set the trailer position to follow the mouse position
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = { transform: `translate(${x}px, ${y}px` };

  // create an animated trailer so that it will lag behind by 800ms
  trailer.animate(keyframes, { duration: 800, fill: "forwards" });
};
