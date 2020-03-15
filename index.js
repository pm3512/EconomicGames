var left = document.getElementById("left");
var right = document.getElementById("right");

left.style.paddingLeft ="10vw";
right.style.float = "right";
right.style.paddingRight = "10vw";

var iframe = document.getElementById("myFrame");

set_element_size_style();

iframe.style.position = "relative";
iframe.style.width = "80vw";
iframe.style.left = "10vw";

function set_element_size_style() {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    if (h > 200 / 0.6) {
        iframe.style.height = "60vh";
    } else {
        iframe.style.height = "200px";
    }
    if (w > 640 / 0.8) {
        iframe.style.width = "80vw";
    } else {
        iframe.style.width = "640px";
    }
    if(w > 200 / 0.4) {
        left.style.width = "30vw";
        right.style.width = "30vw";
    } else {
        left.style.width = "200px";
        right.style.width = "200px";
    }
}

window.addEventListener("resize", set_element_size_style);
localStorage.clear();