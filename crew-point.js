var titleOne = document.querySelector('h1');
var titleThree = document.querySelector('h3');
var para = document.querySelector('p');
var image = document.getElementById('img-crew');
var crewPoint1 = document.getElementById("crew-point1");
var crewPoint2 = document.getElementById("crew-point2");
var crewPoint3 = document.getElementById("crew-point3");
var crewPoint4 = document.getElementById("crew-point4");
var e1 = false ;
var e2 = false ;
var e3 = false ;
var e4 = false ;
var t = '';

function none () {
    crewPoint1.style.opacity = '0.17';
    crewPoint2.style.opacity = '0.17';
    crewPoint3.style.opacity = '0.17';
    crewPoint4.style.opacity = '0.17';
    e1 = false ;
    e2 = false ;
    e3 = false ;
    e4 = false ;
}

function opacity () {
    this.style.opacity = '0.7';
}
function mouse () {
    crewPoint1.addEventListener('mousemove', opacity);
    crewPoint1.addEventListener('mouseout', opacityBasic1);
    crewPoint2.addEventListener('mousemove', opacity);
    crewPoint2.addEventListener('mouseout', opacityBasic2);
    crewPoint3.addEventListener('mousemove', opacity);
    crewPoint3.addEventListener('mouseout', opacityBasic3);
    crewPoint4.addEventListener('mousemove', opacity);
    crewPoint4.addEventListener('mouseout', opacityBasic4);
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
function opacityBasic4() {
    t=4;
    opacityBasic();
}
function opacityBasic () {
    if (t==1) {
        if (e1==true) {
            crewPoint1.style.opacity = '1';
        }else{
            crewPoint1.style.opacity = '0.17';
        }
    }else if (t==2) {
        if (e2==true) {
            crewPoint2.style.opacity = '1';
        }else{
            crewPoint2.style.opacity = '0.17';
        }
    }else if (t==3) {
        if (e3==true) {
            crewPoint3.style.opacity = '1';
        }else{
            crewPoint3.style.opacity = '0.17';
        }
    }else {
        if (e4==true) {
            crewPoint4.style.opacity = '1';
        }else{
            crewPoint4.style.opacity = '0.17';
        }
    }
}
crewPoint1.addEventListener('click', point1);
function point1 () {
    none();
    e1=true;
    mouse();
    this.style.opacity = '1';
    titleOne.innerHTML = 'Douglas Hurley';
    para.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    titleThree.innerHTML = "Commander";
    image.style.background = "url('./assets/crew/image-douglas-hurley.png')";
    image.style.backgroundRepeat = 'no-repeat';
    image.style.backgroundSize = 'auto 100%';
    image.style.backgroundPositionX = '50%';
    if (body.scrollWidth<=375) {
        image.style.width = '327px';
        image.style.height = '223px';
        image.style.backgroundSize = 'auto 100%';
        image.style.backgroundPositionX = '50%';
    }else if(body.scrollWidth<=768){
        image.style.width = '456.37px';
        image.style.height = '572px';
        image.style.backgroundSize = 'auto 100%';
        image.style.backgroundPositionX = '50%';
    }else{
        image.style.width = '568.07px';
        image.style.height = '712px';
        image.style.backgroundPositionX = '0%';
    }
}
crewPoint2.addEventListener('click', point2);
function point2 () {
    none();
    e2=true;
    mouse();
    this.style.opacity = '1';
    titleOne.innerHTML = 'Mark Shuttleworth';
    para.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    titleThree.innerHTML = "Mission Specialist";
    image.style.background = "url('./assets/crew/image-mark-shuttleworth.png')";
    image.style.backgroundRepeat = 'no-repeat';
    if (body.scrollWidth<=375) {
        image.style.width = '327px';
        image.style.height = '223px';
        image.style.backgroundSize = 'auto 100%';
        image.style.backgroundPositionX = '50%';
        
    }else if(body.scrollWidth<=768){
        image.style.width = '368.85px';
        image.style.height = '532px';
        titleOne.style.right = '10px'; 
        image.style.backgroundSize = 'auto 100%';
        image.style.backgroundPositionX = '50%';
    }else{
        image.style.width = '453.44px';
        image.style.height = '654px';
        image.style.backgroundSize = '100%';
        image.style.backgroundPositionX = '0%';
    }
    
}
crewPoint3.addEventListener('click', point3);
function point3 () {
    none();
    e3=true;
    mouse();
    this.style.opacity = '1';
    titleOne.innerHTML = 'Victor Glover';
    para.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
    titleThree.innerHTML = "Pilot";
    image.style.background = "url('./assets/crew/image-victor-glover.png')";
    image.style.backgroundRepeat = 'no-repeat';
    if (body.scrollWidth<=375) {
        image.style.width = '327px';
        image.style.height = '223px';
        image.style.backgroundSize = 'auto 100%';
        image.style.backgroundPositionX = '50%';
        
    }else if(body.scrollWidth<=768){
        image.style.width = '433.09px';
        image.style.height = '532px';
        image.style.backgroundSize = '100%';
        image.style.backgroundPositionX = '50%';
    }else{
        image.style.width = '554.39px';
        image.style.height = '681px';
        image.style.backgroundSize = '100%';
        image.style.backgroundPositionX = '0%';
    }
}
crewPoint4.addEventListener('click', point4);
function point4 () {
    none();
    e4=true;
    mouse();
    this.style.opacity = '1';
    titleOne.innerHTML = 'Anousheh Ansari';
    para.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";
    titleThree.innerHTML = "Flight Engineer";
    image.style.background = "url('./assets/crew/image-anousheh-ansari.png')";
    image.style.backgroundRepeat = 'no-repeat';
    if (body.scrollWidth<=375) {
        image.style.width = '327px';
        image.style.height = '223px';
        image.style.backgroundSize = 'auto 100%';
        image.style.backgroundPositionX = '50%';
    }else if(body.scrollWidth<=768){
        image.style.width = '539.51px';
        image.style.height = '532px';
        image.style.backgroundSize = 'auto 100%';
        image.style.backgroundPositionX = '50%';
    }else{
        image.style.width = '615px';
        image.style.height = '607px';
        image.style.backgroundSize = '100%';
        image.style.backgroundPositionX = '0%';
    }
}