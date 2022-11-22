const url = "./js/surveys.json";
let surveyData;

async function getData() {
    const response = await fetch(url);
    surveyData = await response.json();
    return surveyData;
}

(async function loadSurveys() {
    let resp = await getData();
    for (let i = 0; i < resp.length; i++) {
        console.log(resp[i].title)
    }
})();
