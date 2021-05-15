import './theme.js'
import './styles.css';
import menuCardTpl from './templates/menu-card.hbs';
import menu from './menu.json';

// !Рендерим разметку меню
const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menu) {
  return menu.map(menuCardTpl).join('');
}
