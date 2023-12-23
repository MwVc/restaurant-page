import "./CSS/style.css";
import home from "./modules/home.js";
import menu from "./modules/menu.js";
import contact from "./modules/contact.js";

// parallax effect function
document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const parallaxElement = document.querySelector(".parallax-effect");
  parallaxElement.style.backgroundPositionY = scrollPosition * 0.2 + "px";
});
