var graph;
var alpha;
var font;
var label1, label2, label3, label4;

function preload(){ 
  graph = loadImage("assets/imgs/sleep-cycle-graph.png"); 
  label1 = loadImage("assets/imgs/awake-stage.png");
  label2 = loadImage("assets/imgs/lightsleep-stage.png");
  label3 = loadImage("assets/imgs/deepsleep-stage.png");
  label4 = loadImage("assets/imgs/waking-stage.png");
  font = loadFont('assets/fonts/CogitoWeb-Bold-TRIAL.woff');
} 


function setup() {
  var canvas;
  console.log(windowWidth);
  if(windowWidth < windowHeight){
    canvas = createCanvas(windowWidth, windowHeight);
  } else{
    canvas = createCanvas(windowWidth/2, windowHeight);
  }
  canvas.position(0, 0);
  canvas.style('z-index', '1');
  alpha = 0;
  textFont(font);
}

// Set up for canvas responsiveness
function windowResized(){
//  resizeCanvas(windowWidth/2, windowHeight);
   if(windowWidth < windowHeight){
    resizeCanvas(windowWidth, windowHeight);
  } else{
    resizeCanvas(windowWidth/2, windowHeight);
  }
}

function draw() {
//  imageMode(CENTER);
  fadeInGraph();
  
  var graphX = windowWidth / 18;
  var graphY = height/2 - graph.height/6;
  image(label1, graphX + (label1.width/1.7), graphY - label1.height/2.5, label1.width/2, label1.height/2);
  image(label2, graphX + (label2.width/1.6), graphY + graph.height/6, label2.width/2, label2.height/2);
  image(label3, graphX + graph.width/4.5, graphY + graph.height/2.32, label3.width/2, label3.height/2);
  image(label4, graphX + graph.width/2.265, graphY - label4.height/10, label4.width/2, label4.height/2);
  
  
  textAlign(LEFT);
  fill(255);
  textSize(22);
  text("the anatomy of a sleep cycle", graphX, (height/2 - graph.height/6) + (graph.height/1.8));

//  noStroke();
//  fill(255, 200);
//  var graphWidth = graph.width/2;
//  var graphHeight = graph.height/2;
//  ellipse(windowWidth/18 + (graphWidth * 0.135), (height/2 - graph.height/6) - (0.005 * graphHeight), height/60, height/60);
  
}

function fadeInGraph(){
  clear();
  tint(255, alpha);
  image(graph, windowWidth/18, height/2 - graph.height/6, graph.width/2, graph.height/2);
  if(alpha < 255){
    alpha += 5;
  }
}