function closeWindow(windowId) {
    let window = document.getElementById(windowId).parentNode;
    window.style.display = "none";
}

function openWindow(windowId) {
    let window = document.getElementById(windowId).parentNode;
    if (window.style.display == "none") {
        window.style.display = "block";
    }
}