const url = "./js/surveys.json";
let surveyData;
let userData;

async function getData() {
    const response = await fetch(url);
    surveyData = await response.json();
    return surveyData;
}

(async function loadSurveys() {
    let isDone;
    let jsondata = await getData();
    if (sessionStorage.getItem("0IsDone") === null) {
        sessionStorage.setItem("0IsDone", false);
        sessionStorage.setItem("1IsDone", false);
    }
    for (let i = 0; i < jsondata.length; i++) {
        if (sessionStorage.getItem(`${i}IsDone`) == "true") {
            isDone = "Finished";
        } else {
            isDone = "Get Started"
        }

        const div = document.createElement('div');

        div.className = 'survey';

        div.innerHTML = `
            <div class="surveytitle">${jsondata[i].title}</div>
            <div class="surveydesc">${jsondata[i].description}</div>
            <div class="buttonbox">
                <div class="startsurvey ${isDone}" id="startSurvey${i}"><p class="buttontext">${isDone}</p></div>
            </div>
            <div id="surveyinfo">
                <div class="surveyinfo">Duration: ${jsondata[i].duration}</div>
                <div class="surveyinfo">Regularity: ${jsondata[i].regularity}</div>
                <div class="surveyinfo">Survey reminder notification: OFF</div>
            </div>
        `;

        document.getElementById('surveyitems').appendChild(div);
        if (sessionStorage.getItem(`${i}IsDone`) == "false") {
            document.getElementById(`startSurvey${i}`).addEventListener('click', () => { startSurvey(i); });
        }

        

    }
})();

function startSurvey(id) {
    sessionStorage.setItem("currentSurvey", id);
    window.location.href = './question.html';
}
