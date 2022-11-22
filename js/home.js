(function main() {
    const logo = document.querySelector('.logo-img');
    const logostyle = window.getComputedStyle(logo);
    const logoparent = logo.parentElement

    logoparent.style.padding = '5vw';
    if (localStorage.getItem('logotransition') == 'true') {
        localStorage.setItem('logotransition', 'false');
    } else {
        logoparent.style.transition = 'none';
    }
}());