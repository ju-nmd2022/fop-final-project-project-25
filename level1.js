function setup() {
  createCanvas(1200, 600);
}

function liquidOne(x, y) {
  fill(255, 252, 186);
  beginShape();
  strokeWeight(1);
  vertex(x + 200, y + 550);
  vertex(x + 220, y + 580);
  vertex(x + 240, y + 580);
  vertex(x + 260, y + 550);
  vertex(x + 200, y + 550);
  endShape();

  beginShape();
  vertex(x + 320, y + 550);
  vertex(x + 340, y + 580);
  vertex(x + 360, y + 580);
  vertex(x + 380, y + 550);
  vertex(x + 320, y + 550);
  endShape();

  beginShape();
  vertex(x + 780, y + 550);
  vertex(x + 800, y + 580);
  vertex(x + 950, y + 580);
  vertex(x + 970, y + 550);
  vertex(x + 780, y + 550);
  endShape();

  beginShape();
  vertex(x + 620, y + 280);
  vertex(x + 640, y + 310);
  vertex(x + 750, y + 310);
  vertex(x + 770, y + 280);
  vertex(x + 620, y + 280);
  endShape();
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
  fill(225, 193, 110);
  //map left
  rect(x, y + 330, 100, 70);
  rect(x, y + 400, 150, 40);
  rect(x, y + 440, 600, 30);
  rect(x + 520, y + 470, 150, 25);

  //map right
  rect(x + 520, y + 340, 400, 25);
  rect(x + 580, y + 290, 340, 50);
  rect(x + 830, y + 250, 330, 40);

  //map
  rect(x + 835, y + 520, 80, 20);
  rect(x + 665, y + 250, 60, 20);
  pop();
}

function levelOne() {
  background(255, 252, 186);
  mapOne(0, -10);
  borderOne(0, 0);
  liquidOne(0, 0);
}

function draw() {
  levelOne();
}
