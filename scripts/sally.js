var sally, window, twinkleWindow;
var sallyHeight, sallyWidth;
var windowIllustrationWidth;
var twinkle;

function preload(){ 
  sally = loadImage("assets/imgs/sally.png"); 
  originalWindow = loadImage("assets/imgs/original-window.png");
  twinkleWindow = loadImage("assets/imgs/twinkle-window.png");
} 

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  twinkle = 1;
  background(140, 148, 163);
  sallyHeight = (windowHeight / 6); 
  sallyWidth = sallyHeight * sally.width/sally.height;
  windowIllustrationWidth = windowHeight / 8;
  image(sally, windowWidth / 18, windowHeight - (sallyHeight * 5 / 4), sallyWidth, sallyHeight);
  image(originalWindow, windowWidth / 5.4, windowHeight * 7.4 / 10, windowIllustrationWidth, windowIllustrationWidth);
  frameRate(1);
}

// Set up for canvas responsiveness
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(140, 148, 163);
  if(twinkle == 1){
    image(originalWindow, windowWidth / 5.4, windowHeight * 7.4 / 10, windowIllustrationWidth, windowIllustrationWidth);
    twinkle = 0;
  } else {
    image(twinkleWindow, windowWidth / 5.4, windowHeight * 7.4 / 10, windowIllustrationWidth, windowIllustrationWidth);
    twinkle = 1;
  }
  image(sally, windowWidth / 18, windowHeight - (sallyHeight * 5 / 4), sallyWidth, sallyHeight);
  
}