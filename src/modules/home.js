export default function home() {
  const homePage = document.createElement("div");
  const nav = generateNav();
  const showcaseSection = generateShowcase();
  const nameSection = generateNameSection();

  homePage.appendChild(nav);
  homePage.appendChild(showcaseSection);
  homePage.appendChild(nameSection);

  return homePage;
}

const generateNav = function () {
  const navigationBar = document.createElement("nav");
  const container = document.createElement("div");
  const logo = document.createElement("h1");
  const menuContainer = document.createElement("div");
  const menuItems = generateMenuItems();

  menuItems.classList.add("menu-items");
  logo.classList.add("logo");
  container.classList.add("container");

  logo.textContent = "Soufi's";

  menuContainer.appendChild(menuItems);
  container.appendChild(logo);
  container.appendChild(menuContainer);
  navigationBar.appendChild(container);
  return navigationBar;
};

const generateMenuItems = function () {
  const navListItems = ["HOME", "MENU", "CONTACTS"];

  const menuItems = document.createElement("ul");

  // loop through navList array creating li element and appending to ulElement
  for (let i = 0; i < navListItems.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `<a href=#>${navListItems[i]}</a>`;
    menuItems.appendChild(listItem);
  }

  return menuItems;
};

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

//  Desktop Navigation Menu
const desktopNavigation = function () {};

const section = function () {};
