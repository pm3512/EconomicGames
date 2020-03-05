var images_names = [
    "donut.jpg",
    "donut.jpg",
    "donut.jpg",
    "donut.jpg",
    "donut.jpg"
];

var images = [];
var length = 100/images_names.length;
var picdimension = length * 18 / 20;
var offset = length - picdimension;

for(var i = 0; i < images_names.length; ++i){
    var elem = document.createElement('img');
    elem.style.width = picdimension.toString() + "vw";
    elem.style.height = picdimension.toString() + "vw";
    elem.style.top = offset.toString() + "vw";
    elem.style.position = "absolute";
    elem.style.left = (offset + length * i).toString() + "vw";
    elem.src = images_names[i];
    document.body.append(elem);
    images.push(elem);
}