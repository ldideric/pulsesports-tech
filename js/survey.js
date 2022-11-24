export async function main() {
    const url = "../js/json/surveys.json";
    let surveyData;

    async function getData() {
        const response = await fetch(url);
        surveyData = await response.json();
        return surveyData;
    }

    await (async function loadSurveys() {
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
                <div class="survey-top">
                    <div class="surveytitle">${jsondata[i].title}</div>
                </div>

                <div class="main-date-dates">
                    <div class="main-date-day">
                        <div class="main-date-day-week">Sat</div>
                        <div class="main-date-day-day">9</div>
                    </div>

                    <div class="main-date-day">
                        <div class="main-date-day-week">Sun</div>
                        <div class="main-date-day-day">10</div>
                    </div>

                    <div class="main-date-day main-date-day-sport-day">
                        <div class="main-date-day-week">Mon</div>
                        <div class="main-date-day-day">11</div>
                    </div>

                    <div class="main-date-day">
                        <div class="main-date-day-week">Tue</div>
                        <div class="main-date-day-day">12</div>
                    </div>

                    <div class="main-date-day main-date-day-active">
                        <div class="main-date-day-week">Wed</div>
                        <div class="main-date-day-day">13</div>
                    </div>
                </div>

                <div class="surveydesc">${jsondata[i].description}</div>
                <hr class="main-line">
                <div id="surveyinfo">
                    <div class="surveyinfo">
                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-clock dataIcon" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg>${jsondata[i].duration}
                    </div>
                    <div class="surveyinfo">
                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-arrow-counterclockwise dataIcon" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                        </svg>${jsondata[i].regularity}
                    </div>
                    <div class="startsurvey ${isDone}" id="startSurvey${i}">${isDone}</div>
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
        window.location.href = './#question';
    }
}