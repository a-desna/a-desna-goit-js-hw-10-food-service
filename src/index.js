import menu from './menu.json';
import menuItemTemplate from './templates/menu-item.hbs';
import './styles.css';

const refs = {
  body: document.querySelector('body'),
  menuList: document.querySelector('.js-menu'),
  switchInput: document.querySelector('input.js-switch-input'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuMarkup = creatMenuMarkup(menu);
refs.menuList.insertAdjacentHTML('beforeend', menuMarkup);

function creatMenuMarkup(menu) {
  const markup = menu.reduce(
    (markup, menuItem) => (markup += menuItemTemplate(menuItem)),
    '',
  );
  return markup;
}

const persistedTheme = localStorage.getItem('theme');

if (persistedTheme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switchInput.checked = true;
} else {
  refs.body.classList.add(Theme.LIGHT);
}

refs.switchInput.addEventListener('change', e => {
  if (refs.body.classList.contains(Theme.DARK)) {
    lightTheme();
  } else {
    darkTheme();
  }
});

function darkTheme() {
  refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
}
function lightTheme() {
  refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}
