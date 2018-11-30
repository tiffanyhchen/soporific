var scrollPosition = 0;

/* Colors */
var darkBlue, lightBlue;

var stars = [];
var moon;

function preload(){ 
  moon = loadImage("assets/imgs/moon.png"); 
} 

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  frameRate(1);
  
  darkBlue = color(29, 53, 85);
  lightBlue = color(114, 151, 255);
  setGradient(0, 0, width, height, darkBlue, lightBlue);
  setupStars();
  image(moon, windowWidth/4, windowHeight / 3, windowWidth / 5, windowWidth / 5);
}

// Set up for canvas responsiveness
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  setGradient(0, 0, width, height, darkBlue, lightBlue);
  image(moon, windowWidth/4, windowHeight / 3, windowWidth / 5, windowWidth / 5);
  drawStars();
}

function setupStars(){
  for (var i = 0; i < 70; i++) {
    stars.push(new Star());
  }
  
  for (var i = 0; i < 70; i++) {
    stars[i].draw();
  }
}

function drawStars(){
  for (var i = 0; i < 70; i++) {
    stars[i].draw();
  }
  
  for (var i = Math.floor(Math.random()*10) + 1; i < 70; i = i + 5) {
    stars[i].twinkle();
  }
}

/* Star Object */
function Star() {
  this.x = random(windowWidth);
  this.y = random(windowHeight-100);
  this.radius = random(5) + 1;
  this.transparency = random(250);
  this.change = true;
}

Star.prototype.draw = function() {
  noStroke();
  fill(255, 255, 255, this.transparency);
  ellipse(this.x, this.y, this.radius, this.radius);
}

Star.prototype.twinkle = function() {
  if (this.change){
    this.transparency = this.transparency + 20;
    this.radius = this.radius + 3;
    this.change = false;
  } else{
    this.transparency = this.transparency - 20;
    this.radius = this.radius - 3;
    this.change = true;
  }
}

/* Gradient Functionality */
function setGradient(x, y, w, h, c1, c2) {
  noFill();

  for (var i = y; i <= y+h; i++) {
    var inter = map(i, y, y+h, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x+w, i);
  }
}