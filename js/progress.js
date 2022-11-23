let WorkCircle, PulseCircle, KCALCircle, PulseIndexCircle, HeartRateCircle, SleepTimeCircle;

function CreateHudWork(className, color, trailColor){
    return new ProgressBar.Circle(`.${className}`, {
        color: color,
        trailColor: trailColor,
        strokeWidth: 23,
        trailWidth: 23,
        duration: 2000,
        easing: "easeInOut",
        fill: "transparent",
    });
}

function CreateHudWork2(className, color, trailColor){
    return new ProgressBar.Circle(`.${className}`, {
        color: color,
        trailColor: trailColor,
        strokeWidth: 12,
        trailWidth: 12,
        duration: 2000,
        easing: "easeInOut",
        fill: "transparent",
    });
}

SetupHud = function() {
    WorkCircle = CreateHudWork('WorkCapacityCircle', `rgb(64,64,64)`, 'rgb(248,248,248)');
    WorkCircle.animate(0.4);
    PulseCircle = CreateHudWork('StepsCircle', `rgb(252,15,78)`, 'rgb(248,248,248)');
    PulseCircle.animate(0.6);
    KCALCircle = CreateHudWork('KCALCircle', `rgb(0,164,255)`, 'rgb(248,248,248)');
    KCALCircle.animate(0.8);

    PulseIndexCircle = CreateHudWork2('pulse-index-circle', `rgb(65,114,202)`, 'rgb(84,130,53)');
    PulseIndexCircle.animate(0.8);
    HeartRateCircle = CreateHudWork2('HeartRate-circle', `rgb(65,114,202)`, 'rgb(84,130,53)');
    HeartRateCircle.animate(0.8);
    SleepTimeCircle = CreateHudWork2('SleepTime-circle', `rgb(65,114,202)`, 'rgb(84,130,53)');
    SleepTimeCircle.animate(0.8);
}



SetupHud()