// login script

import * as data from './data.js';

export function main() {
    async function saveLogin() {
        let userdata = await data.get();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (userdata[username] != undefined) {
            if (userdata[username].password == password) {
                localStorage.setItem('currentsession', JSON.stringify({"username": `${username}`, "password": `${password}`}))
                window.location.href = '#home';
                localStorage.setItem('logotransition', 'true');
            } else {
                showError('Incorrect password');
            }
        } else {
            showError('Username not found');
        }
    }

    document.querySelector('.login-div #submit').addEventListener('click', saveLogin);

    function showError(error) {
        const output = document.querySelector('p.outputtext');
        output.style.display = 'inline';
        output.textContent = error;
    }
}