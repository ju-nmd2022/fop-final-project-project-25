function setup() {
  createCanvas(1200, 600);
}

function obstacles(x, y) {
  push();
  fill(111, 78, 55);
  //
  triangle(x + 330, y + 430, x + 350, y + 430, x + 340, y + 410);
  triangle(x + 350, y + 430, x + 370, y + 430, x + 360, y + 410);
  //
  triangle(x + 900, y + 250, x + 920, y + 250, x + 910, y + 230);
  triangle(x + 920, y + 250, x + 940, y + 250, x + 930, y + 230);
  //
  triangle(x + 960, y + 280, x + 980, y + 280, x + 970, y + 300);
  triangle(x + 980, y + 280, x + 1020, y + 280, x + 1000, y + 330);

  pop();
}

function borderOne(x, y) {
  push();
  drawingContext.shadowBlur = 5;
  drawingContext.shadowColor = "white";
  strokeWeight(1);
  // border
  fill(225, 193, 110);
  rect(x, y, 40, 600);
  rect(x + 1160, y, 40, 600);
  rect(x, y, 1200, 50);
  //
  beginShape();
  vertex(x, y + 550);
  vertex(x + 200, y + 550);
  vertex(x + 220, y + 580);
  vertex(x + 240, y + 580);
  vertex(x + 260, y + 550);
  //
  vertex(x + 320, y + 550);
  vertex(x + 340, y + 580);
  vertex(x + 360, y + 580);
  vertex(x + 380, y + 550);
  //
  vertex(x + 780, y + 550);
  vertex(x + 800, y + 580);
  vertex(x + 950, y + 580);
  vertex(x + 970, y + 550);
  //
  vertex(x + 1200, y + 550);
  vertex(x + 1200, y + 600);
  vertex(x, y + 600);
  vertex(x, y + 550);

  endShape();
  pop();
}

function mapOne(x, y) {
  push();
  strokeWeight(1);
  fill(225, 193, 110);
  //map left

  beginShape();
  vertex(x + 40, y + 320);
  vertex(x + 100, y + 320);
  vertex(x + 100, y + 390);
  vertex(x + 150, y + 390);
  vertex(x + 150, y + 430);
  vertex(x + 600, y + 430);
  vertex(x + 600, y + 460);
  vertex(x + 650, y + 460);
  vertex(x + 650, y + 480);
  vertex(x + 530, y + 480);
  vertex(x + 530, y + 460);
  vertex(x + 40, y + 460);
  vertex(x + 40, y + 320);
  endShape();

  //map right

  beginShape();
  vertex(x + 520, y + 320);
  vertex(x + 580, y + 320);
  vertex(x + 580, y + 280);
  //
  vertex(x + 620, y + 280);
  vertex(x + 640, y + 310);
  vertex(x + 750, y + 310);
  vertex(x + 770, y + 280);

  //
  vertex(x + 820, y + 280);
  vertex(x + 820, y + 250);
  vertex(x + 1160, y + 250);
  vertex(x + 1160, y + 280);
  vertex(x + 920, y + 280);
  vertex(x + 920, y + 340);
  vertex(x + 520, y + 340);
  vertex(x + 520, y + 320);

  endShape();

  //map
  rect(x + 835, y + 520, 80, 20, 1);
  rect(x + 665, y + 250, 60, 20, 1);
  pop();
}

function door(x, y) {
  push();
  drawingContext.shadowBlur = 5;
  drawingContext.shadowColor = "white";
  fill(225, 193, 110);
  rect(x + 1020, y + 450, 90, 100);
  fill(255, 223, 150);
  rect(x + 1030, y + 460, 70, 90);
  pop();
}

function levelOne() {
  background(255, 252, 186);
  mapOne(0, 0);
  borderOne(0, 0);
  obstacles(0, 0);
  door(0, 0);
}

function draw() {
  levelOne();
}
