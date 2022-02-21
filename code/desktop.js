function closeWindow(windowId, isChild = true) {
    let window = document.getElementById(windowId);
    if(isChild)
    {
    window = window.parentNode;
    }
    window.style.display = "none";
}

function openWindow(windowId, isChild = true) {
    let window = document.getElementById(windowId);
    if(isChild)
    {
    window = window.parentNode;
    }
    if (window.style.display == "none") {
        window.style.display = "block";
    }
}

function toggleWindow(windowId, isChild = true){
    let window = document.getElementById(windowId);
    if(isChild)
    {
    window = window.parentNode;
    }
    if (window.style.display == "none") {
        window.style.display = "block";
    }
    else if(window.style.display == "block")
    {
        window.style.display = "none";
    }
}
