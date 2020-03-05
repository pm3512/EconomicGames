var pics = [];
for(var i = 0; i < 5; ++i){
    var elem = document.createElement('img');
    elem.src = "donut.jpg";
    elem.style.width = "18vw";
    elem.style.height = "18vw";
    elem.style.top = "1vw";
    elem.style.position = "absolute";
    elem.style.left = (1 + 20 * i).toString() + "vw";
    document.body.append(elem);
    pics.push(elem);
}