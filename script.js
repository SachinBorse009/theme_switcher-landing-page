
const themeSwitcher = document.querySelector('#theme_switcher');

const defaultTheme = 'theme-light';
setTheme(defaultTheme);
themeSwitcher.addEventListener('change' ,(e) => {
        setTheme(e.target.value);
});

function setTheme(theme) {
    document.documentElement.className = theme;
}
