//CONSTANT VARIABLES - MUST NOT CHANGE DURING RUNTIME
const hamburger = document.getElementsByClassName('hamburgerContain')[0];
const nav = document.getElementsByTagName('nav')[0];

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
});

//Method to open a webpage
function navigateToPage(url){
    window.location.href = url;
}

