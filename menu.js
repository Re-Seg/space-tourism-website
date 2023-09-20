var toggle = document.getElementById('toggle');
var headerRight = document.querySelector(".header-right");
var body = document.querySelector("body");
var e=true;

toggle.addEventListener('click', Toggle);
function Toggle() {
    if(e){
        toggle.style.background = "url('./assets/shared/icon-close.svg')";
        toggle.style.backgroundSize = 'cover';
        toggle.style.backgroundRepeat = 'norepeat';
        headerRight.style.display = 'inline-flex';
        headerRight.style.transform = 'translateX(0%)';
        e=false;
    }else{
        toggle.style.background = "url('./assets/shared/icon-hamburger.svg')";
        toggle.style.backgroundSize = 'cover';
        toggle.style.backgroundRepeat = 'norepeat';
        headerRight.style.display = 'none';
        headerRight.style.transform = 'translateX(100%)';
        e=true;
    } 
}