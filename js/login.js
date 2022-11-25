// login script

import * as data from '../js/data.js';

export async function main() {
    let userdata = await data.get();
    async function saveLogin() {
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

    const currentsession = JSON.parse(localStorage.getItem('currentsession'));
    if (userdata[currentsession.username] != '' || userdata[currentsession.username].password == currentsession.password) {
        window.location.href = '#home';
        localStorage.setItem('logotransition', 'true');
    } else {
        document.querySelector('.login-div #submit').addEventListener('click', saveLogin);
    }

    function showError(error) {
        const output = document.querySelector('p.outputtext');
        output.style.display = 'inline';
        output.textContent = error;
    }
}