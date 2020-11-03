import './assets/styles/reset.css';
import './assets/styles/style.css';
import mainSection from './content/main-section';
import menuSection from './content/menu';
import contactSection from './content/contact';

const contentContainer = document.getElementById('content');

const header = () => {
  const header = document.createElement('header');
  const homeTab = document.createElement('a');
  const menuTab = document.createElement('a');
  const contactTab = document.createElement('a');

  homeTab.classList.add('active');

  const addContent = () => {
    homeTab.textContent = 'HOME';
    menuTab.textContent = 'MENU';
    contactTab.textContent = 'CONTACT';
  };

  homeTab.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    homeTab.classList.add('active');
    contentContainer.removeChild(contentContainer.lastChild);
    contentContainer.appendChild(mainSection());
  });

  menuTab.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    menuTab.classList.add('active');
    contentContainer.removeChild(contentContainer.lastChild);
    contentContainer.appendChild(menuSection());
  });

  contactTab.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    contactTab.classList.add('active');
    contentContainer.removeChild(contentContainer.lastChild);
    contentContainer.appendChild(contactSection());
  });

  const appendElements = () => {
    header.appendChild(homeTab);
    header.appendChild(menuTab);
    header.appendChild(contactTab);
  };

  addContent();
  appendElements();

  return header;
};

contentContainer.appendChild(header());
contentContainer.appendChild(mainSection());
