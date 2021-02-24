function closeWindow(windowId) {
    let window = document.getElementById(windowId);
    window.style.display = "none";
}

function openWindow(windowId) {
    let window = document.getElementById(windowId);
    if (window.style.display == "none") {
        window.style.display = "block";
    }
}