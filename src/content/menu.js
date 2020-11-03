import menuImage from "../assets/imgs/menuImage.png";

const menuSection = () => {
  const mainElement = document.createElement("main");
  const imageElement = new Image();
  const textContainer = document.createElement('div')
  const titleElement = document.createElement("h1");
  const listElement = document.createElement("ul");
  const menuItems = [
    'Soupe du Jour',
    "Soupee a l'Oignon",
    'Salade Douce et Amere',
    "Salade d' Epinards",
    'Salade Caesar',
    'Poulet aux Porto',
    'Saint-Jacques Sauce Gingembre et Citron Vert',
    'Truite aux Amandes',
    "Carre d' Agneau"
  ];

  const addContent = () => {
    imageElement.src = menuImage;
    titleElement.textContent = "Menu"
  }

  const appendElements = () => {
    for (let i = 0; i < menuItems.length; i += 1) {
      let listItem = document.createElement('li');
      listItem.textContent = menuItems[i];
      listElement.appendChild(listItem);
    }
    textContainer.appendChild(titleElement);
    textContainer.appendChild(listElement);
    mainElement.appendChild(imageElement);
    mainElement.appendChild(textContainer);
  }

  textContainer.classList.add("text-container");

  addContent();
  appendElements();

  return mainElement;
};

export default menuSection;
