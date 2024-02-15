const darkModeBody = document.querySelector('body');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', (e) => {
    console.log(e.target);
    if (darkModeBody.classList.contains('dark-mode')) {
        darkModeBody.classList.remove('dark-mode')
    } else {
        darkModeBody.classList.add('dark-mode')
    }
})