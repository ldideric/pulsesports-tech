export async function main() {
    const data = await import('./data.js');

    const url = "./js/json/userdata.json";
    let userData;

    document.getElementById('setting-logout').addEventListener('click', () => {
        localStorage.setItem('currentsession', JSON.stringify({"username": '', "password": ''}));
        window.location.href = '#';
    });

    (async function updateData() {
        userData = await data.get();
        document.getElementById("profile-name").innerHTML = userData.siwan.name;
        document.getElementById("profile-desc").innerHTML = userData.siwan.sport;
        document.getElementById("profile-lvl").innerHTML = userData.siwan.level;
    }());

    const themetoggler = await import('./themetoggler.js');
    themetoggler.editbody();
    document.querySelector('#toggle-theme').addEventListener('click', () => {
        themetoggler.run();
    })
}