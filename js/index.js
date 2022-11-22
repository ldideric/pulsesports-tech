function saveLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    window.location.href = 'home.html';
}

localStorage.setItem('logotransition', 'true');