function setup() {
  createCanvas(1200, 600);
}

function obstaclesTwo(x, y) {
  push();
  fill(72, 60, 50);
  // 1
  triangle(x + 350, y + 500, x + 330, y + 500, x + 340, y + 480);
  triangle(x + 330, y + 500, x + 310, y + 500, x + 320, y + 480);
  // 2
  triangle(x + 720, y + 270, x + 740, y + 270, x + 730, y + 250);
  triangle(x + 740, y + 270, x + 760, y + 270, x + 750, y + 250);
  // 3
  triangle(x + 850, y + 300, x + 870, y + 300, x + 860, y + 320);
  triangle(x + 870, y + 300, x + 910, y + 300, x + 890, y + 350);
  pop();
}

function borderTwo(x, y) {
  strokeWeight(1);
  // border
  fill(111, 85, 55);
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
  fill(111, 85, 55);

  //bottom map
  beginShape();
  vertex(x + 220, y + 600);
  vertex(x + 220, y + 500);
  vertex(x + 350, y + 500);
  vertex(x + 350, y + 440);
  vertex(x + 420, y + 440);
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
  rect(x + 835, y + 520, 90, 20, 1);
  pop();

  //top map
  beginShape();
  vertex(x + 640, y + 300);
  vertex(x + 640, y + 270);
  vertex(x + 850, y + 270);
  vertex(x + 850, y + 220);
  //
  vertex(x + 910, y + 220);
  vertex(x + 930, y + 250);
  vertex(x + 970, y + 250);
  vertex(x + 990, y + 220);
  //
  vertex(x + 1160, y + 220);
  vertex(x + 1160, y + 300);
  vertex(x + 640, y + 300);
  endShape();
}

function liquidTwo(x, y) {
  // liquid

  push();
  fill(0, 100, 0);
  noStroke();
  drawingContext.shadowBlur = 5;
  drawingContext.shadowColor = "green";
  rect(x + 880, y + 225, 170, 30);
  rect(x + 100, y + 555, 1000, 30);

  pop();
}

function doorTwo(x, y) {
  push();
  drawingContext.shadowBlur = 2;
  drawingContext.shadowColor = "white";
  fill(111, 85, 55);
  rect(x + 1020, y + 450, 90, 100);
  fill(131, 95, 55);
  rect(x + 1030, y + 460, 70, 90);
  pop();
}

function levelTwo() {
  background(178, 194, 131);
  liquidTwo(0, 0);
  mapTwo(0, 0);
  borderTwo(0, 0);
  obstaclesTwo(0, 0);
  doorTwo(0, 0);
}

function draw() {
  levelTwo();
}
