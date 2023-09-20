var moon = document.getElementById('moon');
var mars = document.getElementById('mars');
var europa = document.getElementById('europa');
var titan = document.getElementById('titan');
var titleOne = document.querySelector('h1');
var para = document.querySelector('p');
var distance = document.getElementById('distance');
var travel = document.getElementById('travel');
var image = document.getElementById('img-destination');
var e1 = false ;
var e2 = false ;
var e3 = false ;
var e4 = false ;
var t = '';
function underline() {
    this.style.textDecoration = "2.5px underline";
}
function underlineNone() {
    if (t==1) {
        if (e1==true) {
            moon.style.textDecoration = "2.5px underline white";
        }else{
            moon.style.textDecoration = "none";
        }
    }else if (t==2) {
        if (e2==true) {
            mars.style.textDecoration = "2.5px underline white";
        }else{
            mars.style.textDecoration = "none";
        }
    }else if (t==3) {
        if (e3==true) {
            europa.style.textDecoration = "2.5px underline white";
        }else{
            europa.style.textDecoration = "none";
        }
    }else {
        if (e4==true) {
            titan.style.textDecoration = "2.5px underline white";
        }else{
            titan.style.textDecoration = "none";
        }
    }
}
function mouse () {
    moon.addEventListener('mousemove',underline);
    moon.addEventListener('mouseout',underlineNone1);
    mars.addEventListener('mousemove',underline);
    mars.addEventListener('mouseout',underlineNone2);
    titan.addEventListener('mousemove',underline);
    titan.addEventListener('mouseout',underlineNone4);
    europa.addEventListener('mousemove',underline);
    europa.addEventListener('mouseout',underlineNone3);
} 
function underlineNone1() {
    t=1;
    underlineNone();
}
function underlineNone2() {
    t=2;
    underlineNone();
}
function underlineNone3() {
    t=3;
    underlineNone();
}
function underlineNone4() {
    t=4;
    underlineNone();
}
function none () {
    mars.style.textDecoration = 'none';
    mars.style.color = '#D0D6F9';
    moon.style.textDecoration = 'none';
    moon.style.color = '#D0D6F9';
    europa.style.textDecoration = 'none';
    europa.style.color = '#D0D6F9';
    titan.style.textDecoration = 'none';
    titan.style.color = '#D0D6F9';
    e1 = false ;
    e2 = false ;
    e3 = false ;
    e4 = false ;
}
moon.addEventListener('click', Moon);
function Moon () {
    none();
    e1=true;
    mouse();
    moon.style.color = 'white';
    titleOne.innerHTML = 'Moon';
    para.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    distance.innerHTML = "<span>Avg. distance</span><br>384,400 km";
    travel.innerHTML = "<span>Est. travel time</span><br>3 days";
    image.style.background = "url('./assets/destination/image-moon.png')";
    moon.style.textDecoration = "2.5px underline white";
    image.style.backgroundSize = 'auto 100%';
}
mars.addEventListener('click', Mars);
function Mars() {
    none();
    e2=true;
    mouse();
    mars.style.color = 'white';
    titleOne.innerHTML = 'Mars';
    para.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    distance.innerHTML = "<span>Avg. distance</span><br>225 mil. km";
    travel.innerHTML = "<span>Est. travel time</span><br>9 months";
    image.style.background = "url('./assets/destination/image-mars.png')";
    mars.style.textDecoration = "2.5px underline white";
    image.style.backgroundSize = 'auto 100%';
}
titan.addEventListener('click', Titan);
function Titan() {
    none();
    e4=true;
    mouse();
    titan.style.color = 'white';
    titleOne.innerHTML = 'Titan';
    para.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    distance.innerHTML = "<span>Avg. distance</span><br>1.6 bil. km";
    travel.innerHTML = "<span>Est. travel time</span><br>7 years";
    image.style.background = "url('./assets/destination/image-titan.png')";
    titan.style.textDecoration = "2.5px underline white";
    image.style.backgroundSize = 'auto 100%';
}
europa.addEventListener('click', Europa);
function Europa() {
    none();
    e3=true;
    mouse();
    europa.style.color = 'white';
    titleOne.innerHTML = 'Europa';
    para.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    distance.innerHTML = "<span>Avg. distance</span><br>628 mil. km";
    travel.innerHTML = "<span>Est. travel time</span><br>3 years";
    image.style.background = "url('./assets/destination/image-europa.png')";
    europa.style.textDecoration = "2.5px underline white";
    image.style.backgroundSize = 'auto 100%';
}