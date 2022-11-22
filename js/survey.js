const url = "./js/surveys.json";
let surveyData;

async function getData() {
    const response = await fetch(url);
    surveyData = await response.json();
    return surveyData;
}

(async function loadSurveys() {
    let jsondata = await getData();
    for (let i = 0; i < jsondata.length; i++) {
        const div = document.createElement('div');

        div.className = 'survey';

        div.innerHTML = `
            <div class="surveytitle">${jsondata[i].title}</div>
            <div class="surveydesc">${jsondata[i].description}</div>
            <div class="buttonbox">
                <div class="startsurvey" id="startSurvey${i}"><p class="buttontext">Get Started</p></div>
            </div>
            <div id="surveyinfo">
                <div class="surveyinfo">Duration: ${jsondata[i].duration}</div>
                <div class="surveyinfo">Regularity: ${jsondata[i].regularity}</div>
                <div class="surveyinfo">Survey reminder notification: OFF</div>
            </div>
        `;

        document.getElementById('surveyitems').appendChild(div);
        document.getElementById(`startSurvey${i}`).addEventListener('click', () => { startSurvey(i); });

    }
})();

function startSurvey(id) {
    sessionStorage.setItem("currentSurvey", id);
    window.location.href = './question.html';
}
