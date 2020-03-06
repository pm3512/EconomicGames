var images_names = [
    "res/circle.jpg",
    "res/donut.jpg",
    "res/square.jpg",
    "res/donut.jpg",
    "res/donut.jpg"
];

var images = [];
var length = 100/images_names.length;
var picdimension = length * 18 / 20;
var offset = length - picdimension;

var game = document.getElementById("game");
var msg = document.createElement("p");

for (var i = 0; i < images_names.length; ++i) {
    var elem = document.createElement("img");
    elem.style.width = picdimension.toString() + "vw";
    elem.style.height = picdimension.toString() + "vw";
    elem.style.top = offset.toString() + "vw";
    elem.style.position = "absolute";
    elem.style.left = (offset + length * i).toString() + "vw";
    elem.src = images_names[i];
    elem.id = "image_" + i;
    game.append(elem);
    images.push(elem);
}

var button = document.createElement("img");
button.style.position = "absolute";
button.style.width = picdimension.toString() + "vw";
button.style.height = (picdimension / 3).toString() + "vw";
button.style.top = length.toString() + "vw";
button.style.left =(offset + length * ((images_names.length - 1) / 2)).toString()  + "vw";
button.src = "res/square.jpg";

function finish_sort() {
    this.parentNode.removeChild(this);
    lock_drag_and_drop();
    for (let i = 0; i < images_names.length; ++i) {
        if (i == images_names.length - 2) {
            images[i].onclick = right;
        } else {
            images[i].onclick = wrong;
        }
    }
}

function right() {
    this.onclick = null;
    this.src = "res/right.png";
    setTimeout(function(){ location.reload(); }, 2000);
}

function wrong() {
    this.onclick = null;
    this.src = "res/wrong.png";
}

button.onclick = finish_sort;
button.draggable = false;
game.append(button);