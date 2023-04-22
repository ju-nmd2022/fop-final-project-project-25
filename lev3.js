function setup() {
  createCanvas(1200, 600);
}

function obstaclesThree(x, y) {
  push();
  fill(200, 200, 200);
  // 1
  triangle(x + 480, y + 400, x + 500, y + 400, x + 490, y + 380);
  triangle(x + 500, y + 400, x + 520, y + 400, x + 510, y + 380);
  // 2
  triangle(x + 880, y + 400, x + 900, y + 400, x + 890, y + 380);
  triangle(x + 900, y + 400, x + 920, y + 400, x + 910, y + 380);
  // 3
  triangle(x + 1000, y + 400, x + 1020, y + 400, x + 1010, y + 380);
  triangle(x + 1020, y + 400, x + 1040, y + 400, x + 1030, y + 380);

  pop();
}

function liquidThree(x, y) {
  // liquid

  push();
  fill(255, 215, 0);
  noStroke();
  drawingContext.shadowBlur = 5;
  drawingContext.shadowColor = "orange";

  rect(x + 100, y + 555, 1000, 30);
  rect(x + 110, y + 315, 100, 30);

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
  vertex(x + 760, y + 580);
  vertex(x + 780, y + 550);
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

  //map
  rect(x + 650, y + 470, 100, 120, 1);
  rect(x + 820, y + 400, 350, 30, 1);
  //
  beginShape();
  vertex(x + 310, y + 580);
  vertex(x + 310, y + 480);
  vertex(x + 400, y + 480);
  vertex(x + 400, y + 400);
  vertex(x + 600, y + 400);
  vertex(x + 600, y + 580);
  vertex(x + 310, y + 580);
  endShape();
  //
  beginShape();
  vertex(x + 30, y + 310);
  vertex(x + 30, y + 360);
  vertex(x + 330, y + 360);
  vertex(x + 330, y + 310);
  vertex(x + 200, y + 310);
  vertex(x + 180, y + 340);
  vertex(x + 150, y + 340);
  vertex(x + 130, y + 310);

  endShape();

  pop();
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

  liquidThree(0, 0);
  mapThree(0, 0);
  borderThree(0, 0);
  obstaclesThree(0, 0);
  doorThree(0, 0);
}

function draw() {
  levelThree();
}
