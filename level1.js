function setup() {
  createCanvas(1200, 600);
}

function borderOne(x, y) {
  strokeWeight(1);
  // border
  fill(225, 193, 110);
  rect(x, y, 40, 600);
  rect(x + 1160, y, 40, 600);
  rect(x, y, 1200, 50);
  rect(x, y + 550, 1200, 50);
}

function mapOne(x, y) {
  push();
  strokeWeight(1);
  //map left
  rect(x, y + 330, 100, 70);
  rect(x, y + 400, 150, 40);
  rect(x, y + 440, 600, 30);
  rect(x + 520, y + 470, 150, 25);

  //map right
  rect(x + 520, y + 340, 400, 25);
  rect(x + 580, y + 290, 340, 50);
  rect(x + 830, y + 260, 330, 30);
  pop();
}

function levelOne() {
  background(255, 252, 186);
  mapOne(0, -10);
  borderOne(0, 0);
}

function draw() {
  levelOne();
}
