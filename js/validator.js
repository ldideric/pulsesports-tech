import * as data from '../js/data.js'

async function main() {
    const userdata = await data.get();
    if (JSON.parse(localStorage.getItem('currentsession')) == null) {
        localStorage.setItem('currentsession', JSON.stringify({"username": '', "password": ''}))
    }
    const currentsession = JSON.parse(localStorage.getItem('currentsession'));
    if (userdata[currentsession.username] == '' || userdata[currentsession.username].password != currentsession.password) {
        window.location.href = './#login';
        localStorage.setItem('currentsession', JSON.stringify({"username": '', "password": ''}));
    }
}

main();

window.addEventListener('hashchange', () => {
    main();
})