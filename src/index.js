import './main.css'
import { home } from './home';
import {menu} from './menu';
import {contact} from './contact';

const logic = (() => {
  const content = document.querySelector('.content');
  const buttons = document.querySelectorAll('.navbar li');
  const tabs = [home, menu, contact];
  let currentTab = buttons[0];
  content.addEventListener('load', home());

  const removeContent = () => {
    content.textContent = '';
    currentTab.classList.remove('tab-selected');
  }

  const changeTab = (e) => {
    removeContent();
    e.target.classList.add('tab-selected');
    let index = Array.from(buttons).indexOf(e.target);
    tabs[index]();
    currentTab = e.target;
  }

  buttons.forEach(btn => btn.addEventListener('click', e => changeTab(e)));
})();
