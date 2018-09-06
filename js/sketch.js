var img;
var smallPoint, largePoint;

function preload() {
  img = loadImage('../images/moon-walk-flag-small.jpg');
}

function setup() {
  createCanvas(1240, 1000);
  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

function draw() {
  var pointillize = map(500, 0, width, smallPoint, largePoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
}
