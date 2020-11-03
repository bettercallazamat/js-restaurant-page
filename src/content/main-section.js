import homeImage from "../assets/imgs/homeImage.png";

const mainSection = () => {
    const mainElement = document.createElement('main');
    const textContainer = document.createElement('div')
    const headingMain = document.createElement('h1');
    const descMain = document.createElement('p');
    const imageMain = new Image();

    textContainer.classList.add("text-container")

    const addContent = () => {
        headingMain.textContent = "Welcome to\nChef restaurant";
        descMain.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit excepturi quibusdam itaque numquam quas. Libero, accusamus! Rerum quaerat, ipsum fugiat, quibusdam iusto facere, dignissimos deleniti odio vero ratione nam necessitatibus.";
        imageMain.src = homeImage;
    }

    const appendElements = () => {
        textContainer.appendChild(headingMain);
        textContainer.appendChild(descMain);
        mainElement.appendChild(textContainer);
        mainElement.appendChild(imageMain);
    }

    addContent();
    appendElements();

    return mainElement;
};

export default mainSection;