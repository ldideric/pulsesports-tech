const url = "./js/surveys.json";

document.getElementById('backButton').addEventListener('click', () => {
    window.location.href = './survey.html';
});

async function getData() {
    const response = await fetch(url);
    surveyData = await response.json();
    return surveyData;
}

async function loadQuestion() {
    if (sessionStorage.getItem("currentQuestion") === null) {
        sessionStorage.setItem("currentQuestion", 0)
        loadQuestion();
    } else {
        let jsondata = await getData();
        let currentSurvey = sessionStorage.getItem("currentSurvey");
        let currentQuestion = sessionStorage.getItem("currentQuestion");
        document.getElementById("surveyTitle").innerHTML = jsondata[currentSurvey].title
        document.getElementById("questionNmr").innerHTML = "Question " + (parseInt(currentQuestion) + 1) + "/" + (jsondata[currentSurvey].questions.length)
        document.getElementById("questionTitle").innerHTML = jsondata[currentSurvey].questions[currentQuestion].question
        for (let i = 0; i < jsondata[currentSurvey].questions[currentQuestion].answers.length; i++) {
            let questionData = jsondata[currentSurvey].questions[currentQuestion].answers[i];
            const div = document.createElement('div');

            div.innerHTML = `
                <input type="radio" id="${questionData}" name="radioQuestion" value="${questionData}">
                <label for="${questionData}">${questionData}</label>
            `;

            document.getElementById('radio-toolbar').appendChild(div);
        }

        if (currentQuestion >= jsondata[currentSurvey].questions.length - 1) {
            const input = document.createElement('input');
            sessionStorage.setItem("currentQuestion", 0);
            input.className = "submit";
            input.type = "button";
            input.value = "Finish";
            input.id = "finishButton"
            document.getElementById('radio-toolbar').appendChild(input);
            document.getElementById('finishButton').addEventListener('click', () => {
                window.location.href = './survey.html';
            });
        } else {
            const input = document.createElement('input');
            sessionStorage.setItem("currentQuestion", parseInt(sessionStorage.getItem("currentQuestion")) + 1);
            input.className = "submit";
            input.type = "submit";
            input.value = "Next";
            document.getElementById('radio-toolbar').appendChild(input);
        }
    }
}

loadQuestion();
