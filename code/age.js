const birth = 981417600000;
const epochYear = 1970;
let today = Date.now();
let currentAge = new Date(today - birth);
let AgeElement = document.getElementById('Age');

function SetAge() {
    AgeElement.innerText = Math.abs(currentAge.getUTCFullYear() - epochYear);
    setTimeout(SetAge, 60000);
}

SetAge();

