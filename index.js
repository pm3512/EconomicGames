var left = document.getElementById("left");
var right = document.getElementById("right");

left.style.paddingLeft ="10vw";
right.style.float = "right";
right.style.paddingRight = "10vw";

var iframe = document.getElementById("myFrame");

set_element_size_style();

iframe.style.position = "relative";
iframe.style.width = "80vw";
iframe.style.height = "30vw";
iframe.style.left = "10vw";

function set_element_size_style() {
    left.style.width = "30vw";
    right.style.width = "30vw";
}

window.addEventListener("resize", set_element_size_style);
localStorage.clear();