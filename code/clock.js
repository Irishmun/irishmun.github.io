function startTime() {
    //var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    //var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let today = new Date();
    let h = today.getHours(); //hours
    let m = today.getMinutes(); //minutes
    let clock = document.getElementById('Clock');
    //var d = days[(today.getDay() - 1)]; //weekday
    //var D = today.getDate(); //day of the month
    //var M = months[(today.getMonth())]; //month
    m = checkTime(m);
    if (clock != null) {
        if (h >= 0 && h < 11) {
            clock.innerHTML =
                h + ":" + m + " AM"; //" - " + d + " " + D + " " + M + " 1997";
        } else {
            clock.innerHTML =
                h + ":" + m + " PM";
        }
        let t = setTimeout(startTime, 5000);
    }
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}