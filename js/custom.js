var scrol = document.querySelectorAll(".scro");
var wrap = document.getElementById("wrapper");
var mobnav = document.getElementById("mobile_nav");
var hamb = document.getElementById("menuToggle");
var mous = document.getElementById("mouse");

function wscroll() {
    if (wrap.scrollTop >= 200) {
        scrol.forEach(el => el.classList.add('scrol'));
        /*scrol.classList.add("scroll");*/
        mous.style.opacity = "0";
    } else {
        scrol.forEach(el => el.classList.remove('scrol','scro'));
        mous.style.opacity = "1";
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