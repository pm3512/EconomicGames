for(var i = 0; i < images.length; ++i) {
    images[i].setAttribute("draggable", "true");
    images[i].setAttribute("ondrop", "drop(event)");
    images[i].setAttribute("ondragover", "allowDrop(event)");
    images[i].setAttribute("ondragstart", "drag(event)");
}

var drag_and_drop_sound = new Audio('res/drag_and_drop_sound.wav');

function allowDrop(event) {
    event.preventDefault();
  }
  
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    event.dataTransfer.effectAllowed = "move";
    var temp_img = new Image;
    temp_img.src = event.target.src;
    event.dataTransfer.setDragImage(temp_img, 0, 0);
}
  
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var temp_src = document.getElementById(data).src;
    document.getElementById(data).src = event.target.src;
    event.target.src = temp_src;
    drag_and_drop_sound.play();
  }