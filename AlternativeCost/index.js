var left = document.getElementById("left");
var right = document.getElementById("right");

left.style.paddingLeft = "20%";
right.style.float = "right";
right.style.paddingRight = "20%";

var iframe = document.getElementById("myFrame");

iframe.style.position = "relative";
iframe.style.left = "20%";

set_element_size_style();

function set_element_size_style() {
  left.style.width = left.parentElement.clientWidth * 0.25 + "px";
  right.style.width = left.style.width;
  iframe.style.width = iframe.parentElement.clientWidth * 0.6 + "px";
  iframe.style.height = iframe.clientWidth * 0.35 + "px";
}

window.addEventListener("resize", set_element_size_style);

localStorage.clear();
