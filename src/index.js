import "./CSS/style.css";
import loadHome from "./modules/home.js";
import loadMenu from "./modules/menu.js";

const contentContainer = document.querySelector(".content");

contentContainer.appendChild(loadMenu());

// parallax effect function
document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const parallaxElement = document.querySelector(".parallax-effect");
  parallaxElement.style.backgroundPositionY = scrollPosition * 0.2 + "px";
});
