export async function main() {
    let timeout = 0;
    if (localStorage.getItem('logotransition') == 'true') {
        timeout = 20;
    }
    setTimeout(() => {
        const logo = document.querySelector('.logo-img');
        const logoparent = logo.parentElement;
        const date = document.querySelector('.main-date p');
        const mainboxes = document.querySelector('.main-boxes');

        if (localStorage.getItem('logotransition') == 'true') {
            logoparent.style.transition = '1.3s padding ease-out';
            date.style.transition = '1.5s all ease';
            mainboxes.style.transition = '1.5s margin-top ease';
            localStorage.setItem('logotransition', 'false');
        }
        logoparent.style.padding = '5vw';
        date.style.fontSize = '3.5vw';
        date.style.marginRight = '0vw';
        mainboxes.style.marginTop = '0vh';
    }, timeout)

    document.querySelector('button.popup-close-button').addEventListener('click', GetInfoReaching);
    document.querySelector('button.main-reaching-button').addEventListener('click', GetInfoReaching);

    await import('../js/lib/progressbar.min.js');
    let ReachingCircle;
    let ReachingVisible = false

    function CreateCricle(className, color, trailColor){
        return new ProgressBar.Circle(`.${className}`, {
            color: color,
            trailColor: trailColor,
            strokeWidth: 14,
            trailWidth: 14,
            duration: 2000,
            easing: "easeInOut",
            fill: "transparent",
        });
    }

    function SetupCircles() {
        ReachingCircle = CreateCricle('main-reaching-circle', `rgb(59, 178, 115)`, 'rgba(59, 178, 115, 0.35)');
        ReachingCircle.animate(0.556);            
    }

    SetupCircles()

    document.getElementsByClassName('popup-close-button')[0].addEventListener('click', GetInfoReaching);
    document.getElementsByClassName('main-reaching-button')[0].addEventListener('click', GetInfoReaching);
    function GetInfoReaching() {
        if (!ReachingVisible) {
            $('.popup').slideDown(400)
            ReachingVisible = true
        } else {
            $('.popup').slideUp(400)
            ReachingVisible = false
        }
    }
}