export default function loadHome() {
  // const contentContainer = document.querySelector(".content");

  const homePage = home();

  // contentContainer.appendChild(homePage);

  return homePage;
}

function home() {
  const homePage = document.createElement("div");
  const showcaseSection = generateShowcase();
  const nameSection = generateNameSection();
  const aboutSection = generateAboutSection();
  const parallaxSection = generateParallaxSection();
  const footer = generateFooter();

  homePage.appendChild(showcaseSection);
  homePage.appendChild(nameSection);
  homePage.appendChild(parallaxSection);
  homePage.appendChild(aboutSection);
  homePage.appendChild(footer);

  return homePage;
}

const generateShowcase = function () {
  const showcaseSection = document.createElement("section");
  const showcasecontainer = document.createElement("div");
  const showcaseLogo = document.createElement("h1");
  const catchPhrase = document.createElement("h4");
  const iconContainer = document.createElement("div");

  catchPhrase.classList.add("catch-phrase");
  showcaseSection.classList.add("showcase");
  showcasecontainer.classList.add("showcase-container");
  iconContainer.classList.add("icon-container");

  catchPhrase.textContent = "Savor the Flavor, Taste the Difference!";
  showcaseLogo.textContent = "Soufi's";

  showcasecontainer.appendChild(showcaseLogo);
  showcasecontainer.appendChild(iconContainer);
  showcasecontainer.appendChild(catchPhrase);
  showcaseSection.appendChild(showcasecontainer);

  return showcaseSection;
};

const generateNameSection = function () {
  const nameSection = document.createElement("section");
  const container = document.createElement("div");
  const restaurantName = document.createElement("p");
  const description = document.createElement("h1");

  nameSection.classList.add("name-section");
  container.classList.add("container");

  restaurantName.textContent = "Soufi's Restaurant and Cafe";
  description.textContent = "PINEAPPLE MTSUNGA, SIMA YA BADA & MORE...";

  container.appendChild(restaurantName);
  container.appendChild(description);
  nameSection.appendChild(container);

  return nameSection;
};

const generateAboutSection = function () {
  const aboutSection = document.createElement("section");
  const container = document.createElement("div");
  const heading = document.createElement("h2");
  const paragraphOne = document.createElement("p");
  const paragraphTwo = document.createElement("p");

  aboutSection.classList.add("about-section");
  container.classList.add("container");

  heading.innerText = "About Us";
  paragraphOne.innerText =
    "Welcome to Soufi's, where passion meets flavor. Our culinary journey began in 1900, and since then, we have been dedicated to providing an exceptional dining experience for our guests.";
  paragraphTwo.innerText =
    "At Soufi's, we take pride in sourcing the finest ingredients to create mouthwatering dishes that satisfy your cravings. Our menu is a celebration of chidigo cuisine, blending tradition with innovation to deliver unforgettable flavors";

  container.appendChild(heading);
  container.appendChild(paragraphOne);
  container.appendChild(paragraphTwo);
  aboutSection.appendChild(container);

  return aboutSection;
};

const generateFooter = function () {
  const footer = document.createElement("footer");
  const container = document.createElement("div");
  const footerContent = document.createElement("p");

  container.classList.add("container");

  footerContent.innerHTML = "&copy; 2023 All rights reserved";

  container.appendChild(footerContent);
  footer.appendChild(container);

  return footer;
};

const generateParallaxSection = function () {
  const parallaxSection = document.createElement("section");

  parallaxSection.classList.add("parallax-section", "parallax-effect");

  return parallaxSection;
};
