let stage = 0;
let jump = false;
let direction = 1; //forse of gravity in the y direction
let velocity = 2; // the speed of character
let jumpPower = 11; //how high character jumps
let fallingSpeed = 4; //equal to velocity
let minHeight = 490; // height of ground
let maxHeight = 50; // height of sky
let jumpCounter = 0;
//////////////
//////////////boxes variables////////////////
let p1X = 100; //position X for player
let p1Y = 490;
let pWidth = 30;
let pHeight = 60;

let b1X = 210;
let b1Y = 450;
let bWidth = 240;
let bHeight = 30;

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
  rect(x + 820, y + 400, 190, 30, 1);
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
  liquidThree(0, 0);
  ///////////////
  //box 1
  fill(0, 0, 0);
  rect(b1X, b1Y, bWidth, bHeight);
  pop();

  mapThree(0, 0);
  borderThree(0, 0);
  obstaclesThree(0, 0);
  doorThree(0, 0);
  ///////////////
  //jumping on the box on the left top
  if (p1X >= 0 && p1X <= 330 && p1Y >= 250 && p1Y <= 300 && jump === false) {
    p1Y = p1Y; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  //jumping on the first box
  if (
    p1X >= 290 &&
    p1X <= 400 &&
    p1Y >= 420 &&
    p1Y <= minHeight &&
    jump === false
  ) {
    p1Y = p1Y; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  // jumping on the second box
  if (
    p1X >= 380 &&
    p1X <= 600 &&
    p1Y >= 340 &&
    p1Y <= minHeight &&
    jump === false
  ) {
    p1Y = p1Y; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  // jumping on the third box
  if (
    p1X >= 630 &&
    p1X <= 750 &&
    p1Y >= 410 &&
    p1Y <= minHeight &&
    jump === false
  ) {
    p1Y = p1Y; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  // jumping on the small floating box on the right
  if (p1X >= 800 && p1X <= 1000 && p1Y >= 340 && p1Y <= 380 && jump === false) {
    p1Y = p1Y; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }

  push();
  // character
  fill(255, 255, 255);
  rect(p1X, p1Y, pWidth, pHeight);
  pop();
}

function gravity() {
  if (p1Y >= minHeight && jump === false) {
    //stop falling on the ground
    p1Y = p1Y;
    jumpCounter = 0; //reset jumpCounter
  } else {
    p1Y = p1Y + direction * velocity; //makes gravity work
  }

  if (jump === true) {
    if (p1Y <= maxHeight || jumpCounter >= jumpPower) {
      if (p1Y >= minHeight) {
        p1Y = minHeight; //stay on ground after jumping
      }
      velocity = fallingSpeed; // fall at maximums
    } else {
      velocity = -jumpPower; //negative is up
      jumpCounter = jumpCounter + 1; //add to jump counter
    }
  } else {
    velocity = fallingSpeed;
  }
}

function keyPressed() {
  if (keyIsDown(37)) {
    p1X = p1X - 5; //move left
  } else if (keyIsDown(39)) {
    p1X = p1X + 5; // move right
  }

  if (keyIsDown(38)) {
    jump = true;
  } else {
    jump = false;
  }
}

function draw() {
  levelThree();
  keyPressed();
  gravity();
}
