let stage = 0;
let jump = false;
let direction = 1; //forse of gravity in the y direction
let velocity = 2; // the speed of character
let jumpPower = 12; //how high character jumps
let fallingSpeed = 2; //equal to velocity
let minHeight = 490; // height of ground
let maxHeight = 50; // height of sky
let jumpCounter = 0;
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

function obstaclesOne(x, y) {
  push();
  fill(225, 193, 110);
  //
  triangle(x + 330, y + 450, x + 350, y + 450, x + 340, y + 430);
  triangle(x + 350, y + 450, x + 370, y + 450, x + 360, y + 430);
  //
  triangle(x + 1040, y + 320, x + 1020, y + 320, x + 1030, y + 300);
  triangle(x + 1000, y + 320, x + 1020, y + 320, x + 1010, y + 300);
  //
  triangle(x + 550, y + 380, x + 570, y + 380, x + 560, y + 400);
  triangle(x + 570, y + 380, x + 610, y + 380, x + 590, y + 430);

  pop();
}

function liquidOne(x, y) {
  // liquid
  fill(255, random(140, 150), 0);
  push();
  noStroke();
  drawingContext.shadowBlur = 5;
  drawingContext.shadowColor = "red";
  rect(x + 700, y + 325, 200, 30);
  rect(x + 180, y + 555, 290, 30);
  rect(x + 680, y + 555, 230, 30);
  pop();
}

function borderOne(x, y) {
  push();
  //drawingContext.shadowBlur = 5;
  //drawingContext.shadowColor = "white";
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
  vertex(x + 340, y + 580);
  vertex(x + 440, y + 580);
  vertex(x + 460, y + 550);
  //
  vertex(x + 680, y + 550);
  vertex(x + 700, y + 580);
  vertex(x + 850, y + 580);
  vertex(x + 870, y + 550);
  //
  vertex(x + 1200, y + 550);
  vertex(x + 1200, y + 600);
  vertex(x, y + 600);
  vertex(x, y + 550);
  //
  endShape();
  pop();
}

function mapOne(x, y) {
  push();
  strokeWeight(1);
  fill(225, 193, 110);
  //map left

  rect(x + 210, y + 450, 240, 30, 1);

  //map right

  beginShape();
  vertex(x + 520, y + 350);
  vertex(x + 580, y + 350);
  vertex(x + 580, y + 320);
  //
  vertex(x + 700, y + 320);
  vertex(x + 720, y + 350);
  vertex(x + 880, y + 350);
  vertex(x + 900, y + 320);

  //
  vertex(x + 900, y + 320);

  vertex(x + 1160, y + 320);
  vertex(x + 1160, y + 380);
  vertex(x + 920, y + 380);
  vertex(x + 920, y + 380);
  vertex(x + 520, y + 380);
  vertex(x + 520, y + 350);

  endShape();

  //map
  rect(x + 740, y + 510, 80, 20, 1);
  rect(x + 760, y + 270, 80, 20, 1);
  pop();
}

function doorOne(x, y) {
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
  liquidOne(0, 0);
  ///////////////
  push();
  //box 1
  fill(0, 0, 0);
  rect(b1X, b1Y, bWidth, bHeight);
  pop();
  ///////////////

  mapOne(0, 0);
  borderOne(0, 0);
  obstaclesOne(0, 0);
  doorOne(0, 0);
  ///////////////
  push();
  // character
  fill(0, 0, 0);
  rect(p1X, p1Y, pWidth, pHeight);
  pop();
  ///////////////



  //jumping on the first box on the left
  if (p1X >= 210 && p1X <= 450 && p1Y >= 390 && p1Y<= 480 && jump === false) {
    p1Y = p1Y; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  //jumping on the top left small box
  if (p1X >= 520 && p1X <= 580 && p1Y >= 290 && p1Y<= 520 && jump === false) {
    p1Y = p1Y; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  // jumping on the top left big box
  if (p1X >= 580 && p1X <= 1160 && p1Y >= 260 && p1Y<= 320 && jump === false) {
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
  levelOne();
  keyPressed();
  gravity();
  //call functions
}
