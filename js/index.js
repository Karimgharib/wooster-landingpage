//open menu
var icon = document.querySelector(".icon");
var nav = document.getElementsByTagName("ul")[0];

icon.onclick = function () {
    nav.style.display = "block";
}

icon.ondblclick = function () {
    nav.style.display = "none";
}

//play video
var icons = document.querySelector(".icons");
var video = document.getElementsByTagName("video")[0];

icons.onclick = function () {
    video.play();
}

icons.ondblclick = function () {
    video.pause();
}

// scroll button
    var span = document.querySelector(".up");
    
    window.onscroll = function () {
    if (this.scrollY >= 600) {
    span.classList.add("show");
    }
    else {
    span.classList.remove("show");
    }
    }
    span.onclick = function () {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    })
    }

