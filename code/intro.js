let header = document.getElementById("Intro");
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

let stepDenominator = 1;
if (window.localStorage.stepDenominator) {
    stepDenominator = window.localStorage.stepDenominator;
}
let i = 0;
let update = () => {
    let step = animation[i];
    header.innerHTML = step.t;
    i++;
    if (i < animation.length) {
        setTimeout(update, step.ms / stepDenominator)
    } else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById("Main").style.opacity = 1;
            //any extra code here
        }, 500);
        window.localStorage.stepDenominator = 1;
    }
}
update();