let stage = 0;
let jump = false;
let direction = 1; //forse of gravity in the y direction
let velocity = 2; // the speed of character
let jumpPower = 11; //how high character jumps
let fallingSpeed = 2; //equal to velocity
let minHeight = 490; // height of ground
let maxHeight = 50; // height of sky
let jumpCounter = 0;
//////////////
//////////////boxes variables////////////////
let p1X = 100; //position X for player
let p1Y = 490;
let pWidth = 30;
let pHeight = 60;

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

function liquidTwo(x, y) {
  // liquid

  push();
  fill(85, random(100, 110), 47);
  noStroke();
  drawingContext.shadowBlur = 5;
  drawingContext.shadowColor = "green";
  rect(x + 880, y + 225, 170, 30);
  rect(x + 100, y + 555, 1000, 30);

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
  vertex(x + 600, y + 380);
  vertex(x + 600, y + 450);
  vertex(x + 770, y + 450);
  vertex(x + 770, y + 600);
  vertex(x + 220, y + 600);
  endShape();

  //map
  rect(x + 835, y + 520, 90, 20, 1);

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
  ///////////////
  mapTwo(0, 0);
  borderTwo(0, 0);
  obstaclesTwo(0, 0);
  doorTwo(0, 0);
  push();
  // character
  fill(0, 0, 0);
  rect(p1X, p1Y, pWidth, pHeight);
  pop();
  ///////////////
 //jumping on the first box from the left
 if (p1X >= 200 && p1X <= 350 && p1Y >= 440 && p1Y <= minHeight && jump === false) {
  p1Y = p1Y; // don't fall through
  velocity = 0;
  jumpCounter = 0;
}
//jumping on the second box from the left
if (p1X >= 330 && p1X <= 420 && p1Y >= 380 && p1Y <= minHeight && jump === false) {
  p1Y = p1Y; // don't fall through
  velocity = 0;
  jumpCounter = 0;
}
//jumping on the third box from the left
if (p1X >= 460 && p1X <= 600 && p1Y >= 320 && p1Y <= minHeight && jump === false) {
  p1Y = p1Y; // don't fall through
  velocity = 0;
  jumpCounter = 0;
}
//jumping on the fourth box from the bottom
if (p1X >= 600 && p1X <= 770 && p1Y >= 390 && p1Y <= minHeight && jump === false) {
  p1Y = p1Y; // don't fall through
  velocity = 0;
  jumpCounter = 0;
}
//jumping on the box floating on the bottom right
if (p1X >= 815 && p1X <= 925 && p1Y >= 460 && p1Y <= 480 && jump === false) {
  p1Y = p1Y; // don't fall through
  velocity = 0;
  jumpCounter = 0;
}
//jumping on the first box from the right on the top
if (p1X >= 830 && p1X <= 1160 && p1Y >= 160 && p1Y <= 240 && jump === false) {
  p1Y = p1Y; // don't fall through
  velocity = 0;
  jumpCounter = 0;
}
//jumping on the second box from the right on the top
if (p1X >= 620 && p1X <= 850 && p1Y >= 210 && p1Y <= 240 && jump === false) {
  p1Y = p1Y; // don't fall through
  velocity = 0;
  jumpCounter = 0;
}
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
  levelTwo();
  keyPressed();
  gravity();
}
