import "./CSS/style.css";
import loadHome from "./modules/home.js";
import loadMenu from "./modules/menu.js";
import generateNav from "./modules/navigationBar.js";

const initializePage = function () {
  const contentContainer = document.querySelector(".content");

  contentContainer.parentNode.insertBefore(generateNav(), contentContainer);
  contentContainer.appendChild(loadHome());

  const homeBtn = document.querySelector("#home-btn");
  const menuBtn = document.querySelector("#menu-btn");
  const contactBtn = document.querySelector("#contact-btn");

  console.log(homeBtn);
  console.log(menuBtn);
  console.log(contactBtn);

  homeBtn.addEventListener("click", function () {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(loadHome());
  });

  menuBtn.addEventListener("click", function () {
    contentContainer.textContent = "";
    loadMenu();
  });
};

initializePage();

// parallax effect function
document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const parallaxElement = document.querySelector(".parallax-effect");
  parallaxElement.style.backgroundPositionY = scrollPosition * 0.05 + "px";
});

// Show fullScreenImage
function showFullScreenImage() {
  // Get the full-screen image element
  const fullscreenImage = document.getElementById("fullscreenImage");
  // Toggle the display of the full-screen image
  fullscreenImage.style.display === "none"
    ? (fullscreenImage.style.display = "block")
    : (fullscreenImage.style.display = "none");
}
