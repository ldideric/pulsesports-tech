let WorkCircle, PulseCircle, KCALCircle, PulseIndexCircle, HeartRateCircle, SleepTimeCircle, userData;
const url = "./userdata.json";

async function getUserData() {
    const response = await fetch(url);
    userData = await response.json();
    return userData;
}

function CreateHudWork(className, color, trailColor){
    return new ProgressBar.Circle(`.${className}`, {
        color: color,
        trailColor: trailColor,
        strokeWidth: 25,
        trailWidth: 10,
        duration: 2000,
        easing: "easeInOut",
        fill: "transparent",
    });
}

function CreateHudWork2(className, color, trailColor){
    return new ProgressBar.Circle(`.${className}`, {
        color: color,
        trailColor: trailColor,
        strokeWidth: 20,
        trailWidth: 20,
        duration: 2000,
        easing: "easeInOut",
        fill: "transparent",
    });
}

SetupHud = async function() {
    userData = await getUserData();
    userData = userData.admin.timeline['01-01-2000'].statistics;

    WorkCircle = CreateHudWork('WorkCapacityCircle', `rgb(64,64,64)`, 'rgb(225,225,225)');
    WorkCircle.animate(0.78);

    PulseCircle = CreateHudWork('StepsCircle', `rgb(252,15,78)`, 'rgb(225,225,225)');
    PulseCircle.animate(0.4);

    KCALCircle = CreateHudWork('KCALCircle', `rgb(0,164,255)`, 'rgb(225,225,225)');
    KCALCircle.animate(0.6);

    PulseIndexCircle = CreateHudWork2('pulse-index-circle', `rgb(54, 139, 51)`, 'rgb(135, 189, 133)');
    PulseIndexCircle.animate(0.2);

    let HeartRate = userData.HeartRate / userData.HRMax;
    HeartRateCircle = CreateHudWork2('HeartRate-circle', `rgb(180, 54, 31)`, 'rgb(240, 129, 110)');
    HeartRateCircle.animate(HeartRate);

    let SleepTime = userData.SleepTime / 8;
    SleepTimeCircle = CreateHudWork2('SleepTime-circle', `rgb(65,114,202)`, 'rgb(144, 172, 224)');
    SleepTimeCircle.animate(SleepTime);

}
SetupHud()
