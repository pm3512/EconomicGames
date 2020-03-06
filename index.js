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

for(var i = 0; i < images_names.length; ++i){
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

var button = document.createElement("ready");
button.style.position = "absolute";
button.style.width = picdimension.toString() + "vw";
button.style.height = (picdimension / 3).toString() + "vw";
button.style.top = length.toString() + "vw";
button.style.left =(offset + length * ((images_names.length - 1) / 2)).toString()  + "vw";
game.append(button);
var button_text = document.createElement("text");
button_text.innerText = "ready";
button_text.style.textAlign = "center";
button_text.style.display = "table-cell";
button_text.style.verticalAlign = "middle";
button_text.style.position = "relative";
button.appendChild(button_text);
