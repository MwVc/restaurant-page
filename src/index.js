import "./CSS/style.css";
import home from "./modules/home.js";

const content = document.querySelector(".content");

const homePage = home();

content.appendChild(homePage);

// parallax effect function
document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const parallaxElement = document.querySelector(".parallax-effect");
  parallaxElement.style.backgroundPositionY = scrollPosition * 0.2 + "px";
});
