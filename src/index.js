import "./CSS/style.css";
import loadHome from "./modules/home.js";
import loadMenu from "./modules/menu.js";

init();

function createEventListner() {
  const homeBtn = document.getElementById("home-page");
  const menuBtn = document.getElementById("menu-page");

  homeBtn.addEventListener("click", loadHome);
  menuBtn.addEventListener("click", loadMenu);
}

function init() {
  loadMenu();
  loadHome();
  createEventListner();
}

// parallax effect function
document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const parallaxElement = document.querySelector(".parallax-effect");
  parallaxElement.style.backgroundPositionY = scrollPosition * 0.2 + "px";
});
