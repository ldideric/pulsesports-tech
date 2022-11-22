function saveLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    window.location.href = 'home.html';
    localStorage.setItem('logotransition', 'true');
}

localStorage.setItem('logotransition', 'true');


// for the javascript navigator:
//     https://link.link#home etc.
console.log(navigator);
