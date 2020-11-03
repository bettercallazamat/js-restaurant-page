import contactImage from "../assets/imgs/contactImage.jpg";

const contactSection = () => {
    const mainElement = document.createElement("main"); 
    const imageElement = new Image();
    const textContainer = document.createElement('div');
    const titleElement = document.createElement("h1");
    const listElement = document.createElement("ul");
    const contactInfo = [
        'Address: Example str, 123, City, State',
        'Phone number: 0(123)456-789',
        'Email adress: email@example.com',
        'Website: www.example.com'
    ];

    const addContent = () => {
        titleElement.textContent = "Contact Info";
        imageElement.src = contactImage;
    }

    const appendElements = () => {
        for (let i = 0; i < contactInfo.length; i += 1) {
            let listItem = document.createElement('li');
            listItem.textContent = contactInfo[i];
            listElement.appendChild(listItem);
        }
        textContainer.appendChild(titleElement);
        textContainer.appendChild(listElement);
        mainElement.appendChild(imageElement);
        mainElement.appendChild(textContainer);
    }

    textContainer.classList.add('text-container', 'contact-info');

    addContent();
    appendElements();

    return mainElement;
}

export default contactSection;