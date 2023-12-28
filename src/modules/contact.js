import { generateMenuItems } from "./home";

export default function loadContact() {
  const contentContainer = document.querySelector(".content");
  const contactPage = contact();

  contentContainer.appendChild(contactPage);
}

const contact = function () {
  const contactPage = document.createElement("div");
  const footer = generateFooter();

  contactPage.appendChild(footer);

  return contactPage;
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
