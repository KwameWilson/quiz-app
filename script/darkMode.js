const modeBody = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const categoryDarkMode = document.querySelectorAll('.grid-right > div')

toggle.addEventListener('click', () => {
    // console.log(e.target);
    if (modeBody.classList.contains('light-mode')) {
        modeBody.classList.remove('light-mode')
        modeBody.classList.add('dark-mode')
    } else {
        modeBody.classList.remove('dark-mode')
        modeBody.classList.add('light-mode')
    }
})