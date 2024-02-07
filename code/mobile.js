function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    console.log(navigator.userAgent);
    return regex.test(navigator.userAgent);
  }

  if (isMobile()) {
    console.log("Mobile device detected");
    let bod = document.body;
    bod.classList.add("mobile-zoom");
  } else {
    console.log("Desktop device detected");
  }