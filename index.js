var iframe = document.getElementById("myFrame");

set_iframe_size_style();

iframe.style.position = "absolute";
iframe.style.left = "2.5vw";

function set_iframe_size_style() {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    if (h > (320 / 0.7)) {
        iframe.style.height = "70vh";
    } else {
        iframe.style.height = "320px";
    }
    if (w > 640 / 0.9) {
        iframe.style.width = "95vw";
    } else {
        iframe.style.width = "640px";
    }
}

window.addEventListener("resize", set_iframe_size_style);