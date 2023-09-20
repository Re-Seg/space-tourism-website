var titleOne = document.querySelector('h1');
var titleThree = document.querySelector('h3');
var para = document.querySelector('p');
var image = document.getElementById('img-technology');
var technologyCircle1 = document.getElementById("technology-circle1");
var technologyCircle2 = document.getElementById("technology-circle2");
var technologyCircle3 = document.getElementById("technology-circle3");
var e1 = false ;
var e2 = false ;
var e3 = false ;
var t = '';

function none () {
    technologyCircle1.style.opacity = '0.17';
    technologyCircle2.style.opacity = '0.17';
    technologyCircle3.style.opacity = '0.17';
    e1 = false ;
    e2 = false ;
    e3 = false ;
}

function opacity () {
    this.style.opacity = '0.7';
}
function mouse () {
    technologyCircle1.addEventListener('mousemove', opacity);
    technologyCircle1.addEventListener('mouseout', opacityBasic1);
    technologyCircle2.addEventListener('mousemove', opacity);
    technologyCircle2.addEventListener('mouseout', opacityBasic2);
    technologyCircle3.addEventListener('mousemove', opacity);
    technologyCircle3.addEventListener('mouseout', opacityBasic3);
}
function opacityBasic1() {
    t=1;
    opacityBasic();
}
function opacityBasic2() {
    t=2;
    opacityBasic();
}
function opacityBasic3() {
    t=3;
    opacityBasic();
}
function opacityBasic () {
    if (t==1) {
        if (e1==true) {
            technologyCircle1.style.opacity = '1';
        }else{
            technologyCircle1.style.opacity = '0.17';
        }
    }else if (t==2) {
        if (e2==true) {
            technologyCircle2.style.opacity = '1';
        }else{
            technologyCircle2.style.opacity = '0.17';
        }
    }else {
        if (e4==true) {
            technologyCircle3.style.opacity = '1';
        }else{
            technologyCircle3.style.opacity = '0.17';
        }
    }
}
technologyCircle1.addEventListener('click', circle1);
function circle1 () {
    none();
    e1=true;
    mouse();
    this.style.opacity = '1';
    titleOne.innerHTML = 'Launch vehicle';
    para.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    if (body.scrollWidth<=375) {
        image.style.background = "url('./assets/technology/image-launch-vehicle-landscape.jpg')";
        image.style.backgroundRepeat = 'no-repeat';
        image.style.backgroundSize = '100%';
    }else if(body.scrollWidth<=768){
        image.style.background = "url('./assets/technology/image-launch-vehicle-landscape.jpg')";
        image.style.backgroundRepeat = 'no-repeat';
        image.style.backgroundSize = '100%';
    }else{
        image.style.background = "url('./assets/technology/image-launch-vehicle-portrait.jpg')";
        image.style.backgroundRepeat = 'no-repeat';
        image.style.backgroundSize = '100%';
    }
}
technologyCircle2.addEventListener('click', circle2);
function circle2 () {
    none();
    e2=true;
    mouse();
    this.style.opacity = '1';
    titleOne.innerHTML = 'Spaceport';
    para.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    if (body.scrollWidth<=375) {
        image.style.background = "url('./assets/technology/image-spaceport-landscape.jpg')";
        image.style.backgroundRepeat = 'no-repeat';
        image.style.backgroundSize = '100%';
    }else if(body.scrollWidth<=768){
        image.style.background = "url('./assets/technology/image-spaceport-landscape.jpg')";
        image.style.backgroundRepeat = 'no-repeat';
        image.style.backgroundSize = '100%';
    }else{
        image.style.background = "url('./assets/technology/image-spaceport-portrait.jpg')";
        image.style.backgroundRepeat = 'no-repeat';
        image.style.backgroundSize = '100%';
    }
}
technologyCircle3.addEventListener('click', circle3);
function circle3 () {
    none();
    e3=true;
    mouse();
    this.style.opacity = '1';
    titleOne.innerHTML = 'Space capsule';
    para.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    if (body.scrollWidth<=375) {
        image.style.background = "url('./assets/technology/image-space-capsule-landscape.jpg')";
        image.style.backgroundRepeat = 'no-repeat';
        image.style.backgroundSize = '100%';
    }else if(body.scrollWidth<=768){
        image.style.background = "url('./assets/technology/image-space-capsule-landscape.jpg')";
        image.style.backgroundRepeat = 'no-repeat';
        image.style.backgroundSize = '100%';
    }else{
        image.style.background = "url('./assets/technology/image-space-capsule-portrait.jpg')";
        image.style.backgroundRepeat = 'no-repeat';
        image.style.backgroundSize = '100%';
    }
}