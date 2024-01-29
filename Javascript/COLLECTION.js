var header = document.getElementById("header");
var Jesko = document.getElementById("Jesko");
var Gamera = document.getElementById("Gamera");
var Regera = document.getElementById("Regera");
var Agera = document.getElementById("Agera");
var model = document.getElementById("model");


var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");


Jesko.onclick = function () 
{
    header.style.backgroundImage = "url(Assets/Jesko.jpg)";
    model.innerHTML = "Jesko";
    
    document.getElementById("speed").innerHTML = "2.5s";
    document.getElementById("topSpeed").innerHTML = "310 mph";
    document.getElementById("horsePower").innerHTML = "1280 hp";

    
    info2.style.display = "none";
    info3.style.display = "none";
    info4.style.display = "none";
};


Gamera.onclick = function () 
{
    header.style.backgroundImage = "url(Assets/Gamera.jpeg)";
    model.innerHTML = "Gamera";

    document.getElementById("speed").innerHTML = "1.9s";
    document.getElementById("topSpeed").innerHTML = "248 mph";
    document.getElementById("horsePower").innerHTML = "1500 hp";

    
    info2.style.display = "none";
    info3.style.display = "none";
    info4.style.display = "none";
};


Regera.onclick = function () 
{
    header.style.backgroundImage = "url(Assets/Regera.jpg)";
    model.innerHTML = "Regera";
    
    document.getElementById("speed").innerHTML = "2.8s";
    document.getElementById("topSpeed").innerHTML = "249 mph";
    document.getElementById("horsePower").innerHTML = "1500 hp";

    
    info2.style.display = "none";
    info3.style.display = "none";
    info4.style.display = "none";
};

Agera.onclick = function () 
{
    header.style.backgroundImage = "url(Assets/Agera.jpg)";
    model.innerHTML = "Agera";
    
    document.getElementById("speed").innerHTML = "2.8s";
    document.getElementById("topSpeed").innerHTML = "273 mph";
    document.getElementById("horsePower").innerHTML = "1160 hp";

    
    info2.style.display = "none";
    info3.style.display = "none";
    info4.style.display = "none";
};