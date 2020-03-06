for (var i = 0; i < images.length; ++i) {
    images[i].ondrop = drop;
    images[i].ondragover = allow_drop;
    images[i].ondragstart = drag;
    images[i].draggable = true;
}

var drag_and_drop_sound = new Audio('res/drag_and_drop_sound.wav');

function lock_drag_and_drop() {
    for (var i = 0; i < images.length; i++) {
        images[i].ondragstart = null;
    }
}

function unlock_drag_and_drop() {
    for (var i = 0; i < images.length; i++) {
        images[i].ondragstart = drag;
    }
}

function allow_drop(event) {
    event.preventDefault();
}
  
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    event.dataTransfer.effectAllowed = "move";
}
  
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var temp_src = document.getElementById(data).src;
    document.getElementById(data).src = event.target.src;
    event.target.src = temp_src;
    drag_and_drop_sound.play();
}