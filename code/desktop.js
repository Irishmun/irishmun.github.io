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

function toggleWindow(windowId){
    let window = document.getElementById(windowId).parentNode;
    if (window.style.display == "none") {
        window.style.display = "block";
    }
    else if(window.style.display == "block")
    {
        window.style.display = "none";
    }
}
