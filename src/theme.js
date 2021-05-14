const bodyEl = document.querySelector('body');
const themeSwitcher = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeSwitcher.addEventListener('change', themeSwitch);
themeSwitcher.addEventListener('change', setLocalStorage);

function themeSwitch() {
  if (themeSwitcher.checked) {
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
  } else {
    bodyEl.classList.add(Theme.LIGHT);
    bodyEl.classList.remove(Theme.DARK);
  }
}

function setLocalStorage() {
  if (themeSwitcher.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    bodyEl.classList.setItem('theme', Theme.LIGHT);
  }
}

if (localStorage.getItem('theme') === Theme.DARK) {
  bodyEl.classList.add(Theme.DARK);
  themeSwitcher.checked = true;
}
