import { generateMenuItems } from "./home";

export default function loadMenu() {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";

  const menuPage = menu();

  contentContainer.appendChild(menuPage);
}

function menu() {
  const menuPage = document.createElement("div");
  const nav = generateNav();
  const cardsSection = menuCards();
  const footer = generateFooter();

  menuPage.appendChild(nav);
  menuPage.appendChild(cardsSection);
  menuPage.appendChild(footer);

  return menuPage;
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

const menuCards = function () {
  const section = document.createElement("section");
  const cardsContainer = document.createElement("div");
  const menuArray = [
    {
      name: "Jollof Rice",
      description:
        "A popular West African dish made with rice, tomatoes, onions, and a blend of spices, often served with grilled or fried chicken, fish, or other protein.",
      image: "../img/jollof.jpg",
    },
    {
      name: "Bobotie",
      description:
        "A South African dish consisting of spiced minced meat baked with an egg-based topping, typically served with yellow rice and chutney.",
      image: "../img/Bobotie.jpeg",
    },
    {
      name: "Injera",
      description:
        "A sourdough flatbread that is a staple in Ethiopian and Eritrean cuisine, usually served with a variety of stews and dishes.",
      image: "../img/Injera.jpg",
    },
    {
      name: "Suya",
      description:
        "A popular Nigerian street food, suya is skewered and grilled spicy meat (often beef or chicken) served with sliced onions, tomatoes, and pepper sauce.",
      image: "../img/suya.jpeg",
    },
    {
      name: "Bunny Chow",
      description:
        "Originating from South Africa, Bunny Chow is a fast food dish consisting of a hollowed-out loaf of bread filled with curry, typically chicken or mutton curry.",
      image: "../image/bunny_chow.jpg",
    },
    {
      name: "Dibi",
      description:
        "A Senegalese dish featuring grilled lamb skewers marinated in a flavorful blend of spices, often served with mustard sauce and onions.",
      image:
        "https://images.squarespace-cdn.com/content/v1/5ed13dd3465af021e2c1342b/a8e83567-1a5f-4ff1-b4e6-33e9af1fd54d/714EC122-A607-4530-827C-AD33B96BC2D9.jpeg?format=1500w",
    },
  ];

  for (let i = 0; i < menuArray.length; i++) {
    const card = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", `${menuArray[i].image}`);
    img.setAttribute("alt", "Avatar");
    img.setAttribute("style", "width: 100%");

    const container = document.createElement("div");
    container.classList.add("container");

    const heading = document.createElement("h4");
    const description = document.createElement("p");

    heading.textContent = menuArray[i].name;
    description.textContent = menuArray[i].description;

    card.appendChild(img);
    card.appendChild(container);
    container.appendChild(heading);
    container.appendChild(description);
    cardsContainer.appendChild(card);
  }

  section.appendChild(cardsContainer);

  return section;
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
