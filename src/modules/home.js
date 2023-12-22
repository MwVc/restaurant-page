export default function home() {
  return home;
}

const nav = function () {
  const navigationBar = document.createElement("nav");
};

const generateNavList = function () {
  const navListItems = ["HOME", "MENU", "CONTACTS"];

  const navList = document.createElement("ul");

  // loop through navList array creating li element and appending to ulElement
  for (let i = 0; i < navListItems.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `<a href=# class="black-text">${navListItems[i]}</a>`;
    navList.appendChild(listItem);
  }

  return navList;
};

//  Desktop Navigation Menu
const desktopNavigation = function () {};

const section = function () {};
