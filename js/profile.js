export function main() {
    const url = "./js/json/userdata.json";
    let userData;

    async function getUserData() {
        const response = await fetch(url);
        userData = await response.json();
        return userData;
    }

    document.getElementById('setting-logout').addEventListener('click', () => {
        localStorage.setItem('currentsession', JSON.stringify({"username": '', "password": ''}));
        window.location.href = '#';
    });

    async function updateData() {
        userData = await getUserData();
        document.getElementById("profile-name").innerHTML = userData.admin.name;
        document.getElementById("profile-desc").innerHTML = userData.admin.sport;
        document.getElementById("profile-lvl").innerHTML = userData.admin.level;
    }
    
    updateData();
}