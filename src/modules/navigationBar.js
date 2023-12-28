export default function generateNav() {
  const navigationBar = document.createElement("nav");
  const container = document.createElement("div");
  const logo = document.createElement("h1");
  const menuContainer = document.createElement("div");

  // navigation buttons
  const homeBtn = createButton("home-btn", "HOME");
  const menuBtn = createButton("menu-btn", "MENU");
  const contactBtn = createButton("contact-btn", "CONTACT");

  logo.classList.add("logo");
  container.classList.add("container");
  menuContainer.classList.add("buttons");

  logo.textContent = "Soufi's";

  container.appendChild(logo);
  menuContainer.appendChild(homeBtn);
  menuContainer.appendChild(menuBtn);
  menuContainer.appendChild(contactBtn);
  container.appendChild(menuContainer);
  navigationBar.appendChild(container);
  return navigationBar;
}

function createButton(id, name) {
  const btn = document.createElement("button");
  btn.setAttribute("id", id);
  btn.textContent = name;

  return btn;
}
