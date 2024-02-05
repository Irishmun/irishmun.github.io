const birth = new Date(981414000000);
const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;
const epochYear = 1970;
let AgeElement = document.getElementById('Age');

function SetAge() {
    let today = new Date();
    let todayUTC = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    let currentAge = (todayUTC - birth) / MS_PER_YEAR;
    AgeElement.innerText = Math.abs(Math.floor(currentAge));
    setTimeout(SetAge, 30000);
}

SetAge();

