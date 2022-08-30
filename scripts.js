var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var ul = document.querySelector("ul");
var direction = "right"

function setGradient() {
    body.style.background = 
    "linear-gradient(to "+ direction 
    + ", " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background +";" 
}

function ulevent(myDirection) {
    if (myDirection.target.className === "zone dirup") {
        direction = "top";
        setGradient();
    } 
    else if (myDirection.target.className === "zone dirdown"){
        direction = "bottom";
        setGradient(); 
    }
    else if (myDirection.target.className === "zone dirleft"){
        direction = "left";
        setGradient();
    }
    else if (myDirection.target.className === "zone dirright"){
        direction = "right";
        setGradient();
    }
}
css.textContent = body.style.background = 
"linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0))";

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient)

ul.addEventListener("click", ulevent);