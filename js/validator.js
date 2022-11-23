import * as data from './data.js'

async function main() {
    const userdata = await data.get();
    if (JSON.parse(localStorage.getItem('currentsession')) == null) {
        localStorage.setItem('currentsession', JSON.stringify({"username": '', "password": ''}))
    }
    const currentsession = JSON.parse(localStorage.getItem('currentsession'));
    if (userdata[currentsession.username] == undefined || userdata[currentsession.username].password != currentsession.password) {
        window.location.href = './#login';
        localStorage.setItem('currentsession', "{}");
    }
}

main();

window.addEventListener('hashchange', () => {
    main();
})