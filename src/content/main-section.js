const mainSection = () => {
    const mainElement = document.createElement('main');
    const headingMain = document.createElement('h1');
    const descMain = document.createElement('p');
    const imageMain = document.createElement('img');

    const addContent = () => {
        headingMain.textContent = "title1";
        descMain.textContent = "lorem ipsum";
        const imageSrc = "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg";
        imageMain.setAttribute('src', imageSrc);
    }

    const appendElements = () => {
        mainElement.appendChild(headingMain);
        mainElement.appendChild(descMain);
        mainElement.appendChild(imageMain);
    }

    addContent();
    appendElements();

    return mainElement;
};

export default mainSection;