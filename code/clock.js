let today, h, m, clock;

today = new Date();
h = today.getHours(); //hours
m = today.getMinutes(); //minutes
clock = document.getElementById('Clock');
startTime();

function startTime() {
    //var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    //var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    today = new Date();
    h = today.getHours(); //hours
    m = today.getMinutes(); //minutes
    //clock = document.getElementById('Clock');
    m = checkTime(m);
    h = checkTime(h);

    if (h >= 0 && h < 11) {
        clock.innerHTML =
            h + ":" + m + " AM"; //" - " + d + " " + D + " " + M + " 1997";
    } else {
        clock.innerHTML =
            h + ":" + m + " PM";
    }
    setTimeout(startTime, 5000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}