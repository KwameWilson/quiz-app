const darkModeBody = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const categoryDarkMode = document.querySelectorAll('.grid-right > div')

toggle.addEventListener('click', () => {
    // console.log(e.target);
    if (darkModeBody.classList.contains('dark-mode')) {
        darkModeBody.classList.remove('dark-mode')
    } else {
        darkModeBody.classList.add('dark-mode')
    }
})