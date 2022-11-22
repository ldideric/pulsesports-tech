(function main() {
    const logo = document.querySelector('.logo-img');
    const logoparent = logo.parentElement;

    const date = document.querySelector('.main-date p');
    const mainboxes = document.querySelector('.main-boxes');

    logoparent.style.padding = '3vw';
    date.style.fontSize = '13px';
    date.style.marginRight = '0vw';
    mainboxes.style.marginTop = '0vh';
    if (localStorage.getItem('logotransition') == 'true') {
        localStorage.setItem('logotransition', 'false');
    } else {
        logoparent.style.transition = 'none';
        date.style.transition = 'none';
        mainboxes.style.transition = 'none';
    }
}());