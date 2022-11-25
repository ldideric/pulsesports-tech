export async function main(type) {
    await import('../js/lib/progressbar.min.js');

    let WorkCircle, PulseCircle, KCALCircle, PulseIndexCircle, HeartRateCircle, SleepTimeCircle, userData;
    const url = "../js/json/userdata.json";

    async function getUserData() {
        const response = await fetch(url);
        userData = await response.json();
        return userData;
    }

    function CreateHudWork(className, color, trailColor){
        return new ProgressBar.Circle(`.${className}`, {
            color: color,
            trailColor: trailColor,
            strokeWidth: 20,
            trailWidth: 19,
            duration: 2000,
            easing: "easeInOut",
            fill: "transparent",
        });
    }

        function CreateHudWork2(className, color, trailColor){
        return new ProgressBar.SemiCircle(`.${className}`, {
            color: color,
            trailColor: trailColor,
            strokeWidth: 6,
            trailWidth: 6,
            duration: 2000,
            easing: "easeInOut",
            fill: "transparent",
        });
    }

    let SetupHud = async function() {
        userData = await getUserData();
        userData = userData.admin.timeline['01-01-2000'].statistics;

        // Full circle
        let circlecurrent;
        if (type == 'init') {
            circlecurrent = document.querySelector('#fullCircle .active #circlegen');
        } else if (type == 'next') {
            circlecurrent = document.querySelector('#fullCircle .carousel-item-next #circlegen');
        } else if (type == 'prev') {
            circlecurrent = document.querySelector('#fullCircle .carousel-item-prev #circlegen');
        }
        if (circlecurrent == undefined) {
            circlecurrent = 'none';
        } else {
            circlecurrent = circlecurrent.classList[0];
        }
        
        if (circlecurrent == 'WorkCapacityCircle' && !document.querySelector('.WorkCapacityCircle svg')) {
            WorkCircle = CreateHudWork('WorkCapacityCircle', `rgb(64,64,64)`, 'rgb(225,225,225)');
            WorkCircle.animate(0.78);
        }

        if (circlecurrent == 'StepsCircle' && !document.querySelector('.StepsCircle svg')) {
            PulseCircle = CreateHudWork('StepsCircle', `rgb(252,15,78)`, 'rgb(225,225,225)');
            PulseCircle.animate(0.4);
        }

        if (circlecurrent == 'KCALCircle' && !document.querySelector('.KCALCircle svg')) {
            KCALCircle = CreateHudWork('KCALCircle', `rgb(0,164,255)`, 'rgb(225,225,225)');
            KCALCircle.animate(0.6);
        }

        // Halfcircle
        let circlecurrent2;
        if (type == 'init') {
            circlecurrent2 = document.querySelector('#halfCircle .active #circlegen');
        } else if (type == 'next') {
            circlecurrent2 = document.querySelector('#halfCircle .carousel-item-next #circlegen');
        } else if (type == 'prev') {
            circlecurrent2 = document.querySelector('#halfCircle .carousel-item-prev #circlegen');
        }
        if (circlecurrent2 == undefined) {
            circlecurrent2 = 'none';
        } else {
            circlecurrent2 = circlecurrent2.classList[0];
        }

        if (circlecurrent2 == 'pulse-index-circle' && !document.querySelector('.pulse-index-circle svg')) {
            PulseIndexCircle = CreateHudWork2('pulse-index-circle', `rgb(54, 139, 51)`, 'rgb(135, 189, 133)');
            PulseIndexCircle.animate(0.55);
        }

        if (circlecurrent2 == 'HeartRate-circle' && !document.querySelector('.HeartRate-circle svg')) {
            let HeartRate = userData.HeartRate / userData.HRMax;
            HeartRateCircle = CreateHudWork2('HeartRate-circle', `rgb(180, 54, 31)`, 'rgb(240, 129, 110)');
            HeartRateCircle.animate(HeartRate);
        }

        if (circlecurrent2 == 'SleepTime-circle' && !document.querySelector('.SleepTime-circle svg')) {
            let SleepTime = userData.SleepTime / 8;
            SleepTimeCircle = CreateHudWork2('SleepTime-circle', `rgb(65,114,202)`, 'rgb(144, 172, 224)');
            SleepTimeCircle.animate(SleepTime);
        }

    }
    SetupHud()

};