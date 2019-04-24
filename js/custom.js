var header = document.getElementById("header");
var wrap = document.getElementById("wrapper");
var mobnav = document.getElementById("mobile_nav");
var hamb = document.getElementById("menuToggle");

function wscroll() {
    if (wrap.scrollTop >= 200) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
}

wrap.onscroll = wscroll;


function mobmenu_check()  {
    if (mobnav.style.transform == 'none') {
        mobnav.style.transform = 'translate(-100%, 0)';
    wrap.style.opacity = '1';
    }
    else {
        wrap.style.opacity = '.1';
        mobnav.style.transform = 'none';
    }
}

hamb.onclick = mobmenu_check;