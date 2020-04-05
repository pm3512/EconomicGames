var left = document.getElementById("left");
var right = document.getElementById("right");

left.style.paddingLeft = "10%";
right.style.float = "right";
right.style.paddingRight = "10%";

var iframe = document.getElementById("myFrame");
var navigation_bar = document.getElementsByClassName("navigation_bar")[0];

iframe.style.position = "relative";
iframe.style.left = "10%";

set_element_size_style();

function set_element_size_style() {
  if (window.innerWidth > 1800) {
    navigation_bar.style.width = "11vw";
  } else {
    navigation_bar.style.width = 1800 * 0.11 + "px";
  }
  left.style.width = left.parentElement.clientWidth * 0.3 + "px";
  right.style.width = left.style.width;
  iframe.style.width = iframe.parentElement.clientWidth * 0.8 + "px";
  iframe.style.height = iframe.clientWidth * 0.35 + "px";
}

window.addEventListener("resize", set_element_size_style);

localStorage.clear();
