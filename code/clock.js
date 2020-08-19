function startTime() {
    //var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    //var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    var today = new Date();
    var h = today.getHours(); //hours
    var m = today.getMinutes(); //minutes
    //var d = days[(today.getDay() - 1)]; //weekday
    //var D = today.getDate(); //day of the month
    //var M = months[(today.getMonth())]; //month
    m = checkTime(m);
    if (h >= 0 && h < 11) {
        document.getElementById('Clock').innerHTML =
            h + ":" + m + " AM"; //" - " + d + " " + D + " " + M + " 1997";
    } else {
        document.getElementById('Clock').innerHTML =
            h + ":" + m + " PM";
    }
    var t = setTimeout(startTime, 5000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}