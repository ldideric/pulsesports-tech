

function getHRMax(age) {
    return 220 - age;
}

function getZoneBMP(age) {
    let HRM = getHRMax(age);
    let retObj = {};
    for (let i = 1; i < 6; i++) {
        retObj[i] = {};
        retObj[i]['min'] = Math.round(((i + 4) / 10) * HRM);
        retObj[i]['max'] = Math.round(((i + 5) / 10) * HRM);
    }
    return retObj;
}

let dataObj = {
    "01-01-2000" : {
        "statistics" : {
            "HeartRate": 85,
            "HRMax": -1,
            "HRV": 29,
            "RestingHR": 68,
            "HRZone": -1,
            "SleepTime": 6.1
        },
        "surveys" : {
            "RPE" : {
                "1": 4
            },
            "MentalHealth" : {
                "1": 3,
                "2": 5
            }
        }
    }
}

function getOverReachingScore(data) {
    console.log(data);
}
getOverReachingScore(dataObj['01-01-2000']);

// HR Max
// HR Zones


// Heart Rate
// HRV
// Resting HR
// Sleep time


// RPE Survey
// Mental health Survey
