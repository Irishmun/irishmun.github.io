let header = document.getElementById("Intro");
let animation = [
    { t: "[|]", ms: 500 },
    { t: "[ ]", ms: 500 },
    { t: "[|]", ms: 500 },
    { t: "[ ]", ms: 500 },
    { t: "[|]", ms: 500 },
    { t: "[S|]", ms: 200 },
    { t: "[ST|]", ms: 200 },
    { t: "[STE|]", ms: 200 },
    { t: "[STEE|]", ms: 200 },
    { t: "[STEEF|]", ms: 200 },
    { t: "[STEEF ]", ms: 200 },
    { t: "[STEEF|]", ms: 500 },
    { t: "[STEEF ]", ms: 500 },
    { t: "[STEEF|]", ms: 500 },
    { t: "[STEEF ]", ms: 500 },
    { t: "[STEEF|]", ms: 500 },
    { t: "[STEEF]", ms: 500 },
    { t: "[STEEF]", ms: 100 },
];

let stepDenominator = 1;
if (window.localStorage.stepDenominator) {
    stepDenominator = window.localStorage.stepDenominator;
}
let i = 0;
let update = () => {
    let step = animation[i];
    header.innerText = step.t;
    i++;
    if (i < animation.length) {
        setTimeout(update, step.ms / stepDenominator)
    } else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById("Main").style.opacity = 1;
            //any extra code here
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();