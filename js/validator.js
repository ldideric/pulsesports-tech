import * as data from './data.js'

(async function main() {
    const userdata = await data.get();
    const currentsession = JSON.parse(localStorage.getItem('currentsession'));
    if (userdata[currentsession.username] == undefined || userdata[currentsession.username].password != currentsession.password) {
        window.location.href = './?session-canceled=true';
        localStorage.setItem('currentsession', "{}");
    }
}());