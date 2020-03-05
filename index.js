var images = [
    "donut.jpg",
    "donut.jpg",
    "donut.jpg",
    "donut.jpg",
    "donut.jpg"
];

var pics = [];
var number = 10;
var length = 100/number;
var picdimension = length * 18 / 20;
var offset = length - picdimension;

for(var i = 0; i < images.length; ++i){
    var elem = document.createElement('img');
    elem.style.width = picdimension.toString() + "vw";
    elem.style.height = picdimension.toString() + "vw";
    elem.style.top = offset.toString() + "vw";
    elem.style.position = "absolute";
    elem.style.left = (offset + length * i).toString() + "vw";
    elem.src = images[i];
    document.body.append(elem);
    pics.push(elem);
}