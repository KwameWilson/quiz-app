const modeBody = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const categoryDarkMode = document.querySelectorAll('.grid-right > div')


const darkMode = () => {
    modeBody.classList.remove('light-mode')
    modeBody.classList.add('dark-mode')
}

const lightMode = () => {
    modeBody.classList.remove('dark-mode')
    modeBody.classList.add('light-mode')
}

toggle.addEventListener('click', () => {
    // console.log(e.target);
    if (modeBody.classList.contains('light-mode')) {
        darkMode()
    } else {
        lightMode()
    }
})