function setup() {
  createCanvas(1200, 600);
}

function obstaclesThree(x, y) {
  push();
  fill(200, 200, 200);
  // 1
  triangle(x + 380, y + 220, x + 400, y + 220, x + 390, y + 200);
  triangle(x + 400, y + 220, x + 420, y + 220, x + 410, y + 200);
  // 2
  triangle(x + 550, y + 220, x + 570, y + 220, x + 560, y + 200);
  triangle(x + 570, y + 220, x + 590, y + 220, x + 580, y + 200);
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
  push();
  drawingContext.shadowBlur = 2;
  drawingContext.shadowColor = "white";

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
  pop();
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
  vertex(x + 500, y + 410);
  vertex(x + 520, y + 410);
  vertex(x + 540, y + 380);
  //
  vertex(x + 590, y + 380);
  vertex(x + 610, y + 410);
  vertex(x + 630, y + 410);
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
  vertex(x + 440, y + 415);
  vertex(x + 120, y + 415);
  vertex(x + 120, y + 380);
  endShape();

  //map
  rect(x + 855, y + 140, 80, 20, 1);
  rect(x + 40, y + 280, 80, 25, 1);
  rect(x + 40, y + 490, 120, 25, 1);
  pop();

  //top map
  beginShape();
  fill(200, 200, 200);
  vertex(x + 190, y + 255);
  vertex(x + 190, y + 220);
  vertex(x + 700, y + 220);
  vertex(x + 700, y + 170);
  //
  vertex(x + 800, y + 170);
  vertex(x + 820, y + 200);
  vertex(x + 970, y + 200);
  vertex(x + 990, y + 170);
  //
  vertex(x + 1080, y + 170);
  vertex(x + 1080, y + 100);
  vertex(x + 1160, y + 100);
  //
  vertex(x + 1160, y + 255);
  vertex(x + 640, y + 255);
  endShape();
}

function doorThree(x, y) {
  push();
  drawingContext.shadowBlur = 5;
  drawingContext.shadowColor = "white";
  fill(200, 200, 200);
  rect(x + 1020, y + 450, 90, 100);
  fill(150, 150, 150);
  rect(x + 1030, y + 460, 70, 90);
  pop();
}

let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 300; i++) {
  const x = Math.floor(Math.random() * 1200);
  const y = Math.floor(Math.random() * 600);
  const alpha = Math.random() * 600;

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

function levelThree() {
  push();
  noStroke();
  background(0, 0, 0);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 1);

    starAlpha[index] = starAlpha[index] + 0.03;
  }
  pop();
  mapThree(0, 0);
  borderThree(0, 0);
  obstaclesThree(0, 0);
  doorThree(0, 0);
}

function draw() {
  levelThree();
}
