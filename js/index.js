function saveLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    window.location.href = 'home.html';
    transitionLogo();
}

function transitionLogo() {
    const logo = document.querySelector('.logo-img');
    const logostyle = window.getComputedStyle(logo);

    const currentls = JSON.parse(localStorage.getItem('logotransition')) || {};
    currentls.height = logo.height;
    currentls.width = logo.width;
    currentls.margintop = logostyle.marginTop;
    localStorage.setItem('logotransition', JSON.stringify(currentls));
}