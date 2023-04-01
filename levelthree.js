function setup() {
  createCanvas(1200, 600);
}

function obstacles(x, y) {
  push();
  fill(200, 200, 200);
  // 1
  triangle(x + 380, y + 240, x + 400, y + 240, x + 390, y + 220);
  triangle(x + 400, y + 240, x + 420, y + 240, x + 410, y + 220);
  // 2
  triangle(x + 550, y + 240, x + 570, y + 240, x + 560, y + 220);
  triangle(x + 570, y + 240, x + 590, y + 240, x + 580, y + 220);
  // 3
  triangle(x + 500, y + 490, x + 520, y + 490, x + 510, y + 510);
  triangle(x + 520, y + 490, x + 540, y + 490, x + 530, y + 510);
  triangle(x + 540, y + 490, x + 560, y + 490, x + 550, y + 510);
  triangle(x + 560, y + 490, x + 580, y + 490, x + 570, y + 510);
  triangle(x + 580, y + 490, x + 600, y + 490, x + 590, y + 510);
  triangle(x + 600, y + 490, x + 620, y + 490, x + 610, y + 510);
  triangle(x + 620, y + 490, x + 640, y + 490, x + 630, y + 510);
  pop();
}

function borderThree(x, y) {
  strokeWeight(1);
  // border
  fill(200, 200, 200);
  rect(x, y, 40, 600);
  rect(x + 1160, y, 40, 600);
  rect(x, y, 1200, 50);
  //
  beginShape();
  vertex(x, y + 550);
  //
  vertex(x + 240, y + 550);
  vertex(x + 260, y + 580);
  vertex(x + 800, y + 580);
  vertex(x + 820, y + 550);
  //
  vertex(x + 1200, y + 550);
  vertex(x + 1200, y + 600);
  vertex(x, y + 600);
  vertex(x, y + 550);

  endShape();
}

function mapThree(x, y) {
  push();
  strokeWeight(1);
  fill(200, 200, 200);

  //bottom map
  beginShape();
  vertex(x + 120, y + 380);
  //
  vertex(x + 480, y + 380);
  vertex(x + 500, y + 400);
  vertex(x + 520, y + 400);
  vertex(x + 540, y + 380);
  //
  vertex(x + 590, y + 380);
  vertex(x + 610, y + 400);
  vertex(x + 630, y + 400);
  vertex(x + 650, y + 380);
  //
  vertex(x + 700, y + 380);
  vertex(x + 700, y + 450);
  vertex(x + 890, y + 450);
  vertex(x + 890, y + 510);
  vertex(x + 950, y + 510);
  vertex(x + 950, y + 550);
  vertex(x + 850, y + 550);
  vertex(x + 850, y + 490);
  vertex(x + 440, y + 490);
  vertex(x + 440, y + 405);
  vertex(x + 120, y + 405);
  vertex(x + 120, y + 380);
  endShape();

  //map
  rect(x + 855, y + 160, 80, 20, 1);
  rect(x + 40, y + 280, 100, 25, 1);
  rect(x + 40, y + 470, 100, 25, 1);
  pop();

  //top map
  beginShape();
  fill(200, 200, 200);
  vertex(x + 230, y + 265);
  vertex(x + 230, y + 240);
  vertex(x + 700, y + 240);
  vertex(x + 700, y + 190);
  //
  vertex(x + 800, y + 190);
  vertex(x + 820, y + 220);
  vertex(x + 970, y + 220);
  vertex(x + 990, y + 190);
  //
  vertex(x + 1080, y + 190);
  vertex(x + 1080, y + 120);
  vertex(x + 1160, y + 120);
  //
  vertex(x + 1160, y + 265);
  vertex(x + 640, y + 265);
  endShape();
}

function door(x, y) {
  fill(200, 200, 200);
  rect(x + 1020, y + 450, 90, 100);
  fill(150, 150, 150);
  rect(x + 1030, y + 460, 70, 90);
}

function levelThree() {
  background(0, 0, 0);
  mapThree(0, 0);
  borderThree(0, 0);
  obstacles(0, 0);
  door(0, 0);
}

function draw() {
  levelThree();
}
