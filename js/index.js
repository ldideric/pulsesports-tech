function saveLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // window.location.href = 'home.html';
    transitionLogo();
}

function transitionLogo() {
    const logo = document.querySelector('.logo-img');
    const logostyle = window.getComputedStyle(logo);
    const logoparent = logo.parentElement;
    const logoparentstyle = window.getComputedStyle(logoparent);

    const currentls = JSON.parse(localStorage.getItem('logotransition')) || {};
    currentls.height = logoparent.height;
    currentls.width = logoparent.width;
    currentls.padding = logoparentstyle.padding;
    localStorage.setItem('logotransition', JSON.stringify(currentls));
}