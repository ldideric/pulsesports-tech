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
        document.getElementById("profile-name").innerHTML = userData.admin.name;
        document.getElementById("profile-desc").innerHTML = userData.admin.sport;
        document.getElementById("profile-lvl").innerHTML = userData.admin.level;
    }());

    const themetoggler = await import('./themetoggler.js');
    document.querySelector('#toggle-theme').addEventListener('click', () => {
        themetoggler.run();
    })
    themetoggler.editbody();
}