const trailer = document.getElementById("trailer");

//  separate animation logic
const animateTrailer = (e, interacting) => {
  // use the offsetHeight/Width to set the trailer position to follow the mouse position
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1})`,
  };

  // create an animated trailer so that it will lag behind by 800ms
  trailer.animate(keyframes, { duration: 800, fill: "forwards" });
};

const getTrailerIcon = (type) => {
  return type === "video" ? "fa-solid fa-video" : "fa-solid fa-link";
};

window.onmousemove = (e) => {
  const interactable = e.target.closest(".interactable"); //the closest function searches back up the dom tree to find the reference to an element with a given class

  const interacting = interactable !== null; //boolean to indicate if the trailer is inside of the interactable element

  const icon = document.getElementById("trailer__icon");

  animateTrailer(e, interacting);

  trailer.dataset.type = interacting ? interactable.dataset.type : "";

  if (interacting) {
    icon.className = getTrailerIcon(interactable.dataset.type);
  }
};
