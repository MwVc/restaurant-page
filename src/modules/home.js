export default function home() {
  const homePage = document.createElement("div");
  const nav = generateNav();
  homePage.appendChild(nav);

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

//  Desktop Navigation Menu
const desktopNavigation = function () {};

const section = function () {};
