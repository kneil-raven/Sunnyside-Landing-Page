// navbar variable

const nav = document.querySelector('.navbar-nav');
const navToggleBtn = document.querySelector('.nav-toggle-btn');
const navLink = document.querySelectorAll('.nav-link');

// navbar toggle function
const navTogglerFunc = function () {
    nav.classList.toggle('active');
    navToggleBtn.classList.toggle('active');
}

navToggleBtn.addEventListener('click', navTogglerFunc);

for (let i=0; i<navLink; i++) {
    navLink[i].addEventListener('click', navTogglerFunc);
}