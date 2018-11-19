var pageIndex = 0;
var scrollPosition = 0;


function setup() {
  var canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent('main');
}

// Set up for canvas responsiveness
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(183, 223, 255);
  
  if(scrollPosition >= windowHeight){
    background(0, 223, 255);
  }
  
}

// Handles scrolling functionality
function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  scrollPosition += event.delta;
}

function switchBackgroundColor(){
}