for(var i = 0; i < images.length; ++i) {
    images[i].setAttribute("draggable", "true");
    images[i].setAttribute("ondrop", "drop(event)");
    images[i].setAttribute("ondragover", "allowDrop(event)");
    images[i].setAttribute("ondragstart", "drag(event)");
}

function allowDrop(event) {
    event.preventDefault();
  }
  
function drag(event) {
    event.dataTransfer.setData("image", event.target.id);
    event.dataTransfer.effectAllowed = "move";
}
  
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("image");
    var temp_src = document.getElementById(data).src;
    document.getElementById(data).src = event.target.src;
    event.target.src = temp_src;
  }