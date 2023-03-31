function setup() {
  createCanvas(1200, 600);
}

function borderTwo(x, y) {
  strokeWeight(1);
  // border
  fill(225, 193, 110);
  rect(x, y, 40, 600);
  rect(x + 1160, y, 40, 600);
  rect(x, y, 1200, 50);
  //
  beginShape();
  vertex(x, y + 550);
  //
  vertex(x + 150, y + 550);
  vertex(x + 170, y + 580);
  vertex(x + 980, y + 580);
  vertex(x + 1000, y + 550);
  //
  vertex(x + 1200, y + 550);
  vertex(x + 1200, y + 600);
  vertex(x, y + 600);
  vertex(x, y + 550);

  endShape();
}

function mapTwo(x, y) {
  push();
  strokeWeight(1);
  fill(225, 193, 110);

  //bottom map
  beginShape();
  vertex(x + 220, y + 600);
  vertex(x + 220, y + 480);
  vertex(x + 350, y + 480);
  vertex(x + 350, y + 420);
  vertex(x + 420, y + 420);
  vertex(x + 420, y + 600);
  vertex(x + 480, y + 600);
  vertex(x + 480, y + 380);
  vertex(x + 530, y + 380);
  vertex(x + 530, y + 350);
  vertex(x + 600, y + 350);
  vertex(x + 600, y + 450);
  vertex(x + 730, y + 450);
  vertex(x + 730, y + 500);
  vertex(x + 770, y + 500);
  vertex(x + 770, y + 600);
  vertex(x + 220, y + 600);
  endShape();

  //map
  rect(x + 835, y + 520, 80, 20, 1);
  pop();

  //top map
  beginShape();
  vertex(x + 640, y + 300);
  vertex(x + 640, y + 270);
  vertex(x + 850, y + 270);
  vertex(x + 850, y + 220);
  vertex(x + 1160, y + 220);
  vertex(x + 1160, y + 300);
  vertex(x + 640, y + 300);
  endShape();
}

function levelTwo() {
  background(255, 252, 186);
  mapTwo(0, 0);
  borderTwo(0, 0);
}

function draw() {
  levelTwo();
}
