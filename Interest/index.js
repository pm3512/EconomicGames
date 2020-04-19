var iframe = document.getElementById("myFrame");

iframe.style.position = "relative";

set_element_size_style();

function set_element_size_style() {
  iframe.style.width = iframe.parentElement.clientWidth + "px";
  iframe.style.height = "600px"
}

window.addEventListener("resize", set_element_size_style);