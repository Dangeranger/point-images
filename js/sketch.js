'use-strict';

var img;
var smallPoint, largePoint;
const images = [
  'team1',
  'team2',
  'team3',
  'team4',
  'team5',
  'founders',
];

const pickImage = (imgArray) => {
  const index = getRandomIntInclusive(0, 5);
  return imgArray[index];
};

const resetPageAfterDelay = (delay) => {
  window.setTimeout(() => {
    window.location.reload(false)
  }, parseInt(delay, 10));
}

function preload() {
  image = pickImage(images);
  img = loadImage(`../images/${image}.jpg`);
}

function setup() {
  createCanvas(1240, 1000);
  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
  resetPageAfterDelay(25000);
}

function draw() {
  for (let i = 0; i < 40; i++) {
    let pointillize = map(200, 0, width, smallPoint, largePoint);
    let x = floor(random(img.width));
    let y = floor(random(img.height));
    let pix = img.get(x, y);
    fill(pix, 128);
    ellipse(x, y, pointillize, pointillize);
  }
}

function getRandomIntInclusive(min, max) {
  //The maximum is inclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
