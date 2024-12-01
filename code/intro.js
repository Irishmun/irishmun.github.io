let header = document.getElementById("Intro");
let main = document.getElementById("Main");
let animation = [
    { t: "_", ms: 250 },
    { t: "&nbsp&nbsp", ms: 250 },
    { t: "_", ms: 250 },
    { t: "&nbsp&nbsp", ms: 250 },
    { t: "_", ms: 250 },
    { t: "S_", ms: 100 },
    { t: "ST_", ms: 100 },
    { t: "STE_", ms: 100 },
    { t: "STEE_", ms: 100 },
    { t: "STEEF_", ms: 100 },
    { t: "STEEF&nbsp&nbsp", ms: 100 },
    { t: "STEEF_", ms: 250 },
    { t: "STEEF&nbsp&nbsp", ms: 250 },
    { t: "STEEF_", ms: 250 },
    { t: "STEEF&nbsp&nbsp", ms: 250 },
    { t: "STEEF_", ms: 250 },
    { t: "STEEF", ms: 250 },
    { t: "STEEF", ms: 50 },
];

let introplayed = false;
if (window.sessionStorage.introplayed) {
    introplayed = window.sessionStorage.introplayed;
}
else if (window.history.length > 1 && document.referrer.indexOf(window.location.host) > 0){
    window.sessionStorage.introplayed = true;
    introplayed = true;
}

if  (introplayed == false)
{
    main.classList.remove('main-non-intro')
    main.classList.add('main-intro')
    header.classList.add('intro');
    header.classList.remove('forcetop');
    document.getElementById("Main").style.opacity = 0;
}

    let i = 0;
let update = () => {
    if (introplayed == false) {
        let step = animation[i];
        header.innerHTML = step.t;
        i++;
        if (i < animation.length) {
            setTimeout(update, step.ms)
        } else {
            header.classList.add('top');
            setTimeout(() => {
                document.getElementById("Main").style.opacity = 1;
                //any extra code here
            }, 500);
            window.sessionStorage.introplayed = true;
        }
    }
    else {
        main.classList.remove('main-intro')
        main.classList.add('main-non-intro')
        header.classList.remove('intro');
        header.classList.add('forcetop');
        document.getElementById("Main").style.opacity = 1;
    }
}
update();