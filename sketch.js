let bg;
function preload() {
  bg = loadImage('bg.png');
  myFont = loadFont("Creattion Demo.otf");
}

function setup() {
  createCanvas(467, 700);
  background(bg);
}

function draw() {
  strokeWeight(1);
  fill(255);
  textFont(myFont);
  textSize(45);
  text("If I was born as a blackthorn tree,", 20, 275);
  text("I'd wanna be felled by you,", 65, 375);
  text("Held by you,", 115, 475);
  text("Fuel the pyre of your enemies.", 165, 575);
}