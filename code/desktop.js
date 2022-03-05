function closeWindow(windowId, isChild = true) {
    let window = document.getElementById(windowId);
    if (isChild) {
        window = window.parentNode;
    }
    window.style.display = "none";
}

function openWindow(windowId, isChild = true) {
    let window = document.getElementById(windowId);
    if (isChild) {
        window = window.parentNode;
    }
    if (window.style.display == "none") {
        window.style.display = "block";
    }
}

function toggleWindow(windowId, isChild = true) {
    let window = document.getElementById(windowId);
    if (isChild) {
        window = window.parentNode;
    }
    if (window.style.display == "none") {
        window.style.display = "block";
    }
    else if (window.style.display == "block") {
        window.style.display = "none";
    }
}

function shutDown(elementId, delay = 0) {
    let music = document.getElementById("shutdownSound");
    setTimeout(() => {
        if (elementId != null) {
            document.getElementById(elementId).style.display = "none";
            //window.location.href = "https://duckduckgo.com/";
        }
        music.play();
    }, delay);
}

function startUp() {
    let music = document.getElementById("startupSound");
    music.play();
}
