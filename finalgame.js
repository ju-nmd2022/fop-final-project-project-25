//we have watched this playlist of video tutorials https://youtu.be/FZlpuQeCvlk
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
let pWidth = 50;
let pHeight = 95;

let b1X = 210;
let b1Y = 450;
let bWidth = 240;
let bHeight = 30;

//////STATE OF THE GAME/////////
let isGameActive = true;
let state = "levelOne";

function setup() {
  createCanvas(1200, 600);
  // start button
  startButton = createButton("START");
  startButton.position(530, 320);
  startButton.style("color:black");
  startButton.style("background-color:red");
  startButton.style("border", "none");
  startButton.style("border-radius", "10px");
  startButton.size(220, 100);
  startButton.style("font-size", "45px");
  startButton.hide();

  // play again button winscreen
  winButton = createButton("PLAY AGAIN");
  winButton.position(530, 470);
  winButton.style("color:white");
  winButton.style("background-color:black");
  winButton.style("border", "none");
  winButton.size(200, 30);
  winButton.style("font-size", "30px");
  winButton.hide();

  // try again button failscreen
  failButton = createButton("TRY AGAIN");
  failButton.position(530, 470);
  failButton.style("color:white");
  failButton.style("background-color:black");
  failButton.style("border", "none");
  failButton.size(200, 30);
  failButton.style("font-size", "30px");
  failButton.hide();
}

//////////////LEVELONE SCREEN////////////////
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

//////////////LEVELTWO SCREEN////////////////
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
  //
  vertex(x + 520, y + 380);
  vertex(x + 520, y + 340);
  vertex(x + 600, y + 340);
  //

  vertex(x + 600, y + 430);

  //

  vertex(x + 770, y + 430);
  vertex(x + 770, y + 600);
  vertex(x + 220, y + 600);
  endShape();

  //map
  rect(x + 835, y + 490, 90, 20, 1);

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

//////////////LEVELTHREE SCREEN////////////////
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

//////////////WIN SCREEN////////////////
function winScreen() {
  // text: YOU WIN!
  fill(255, 255, 255);
  textSize(90);
  // textFont(Copperplate);
  textAlign(CENTER, TOP);
  text("YOU WIN!", 620, 100);
  // if we add a timer then:
  // text: time score
  fill(255, 255, 255);
  textSize(15);
  text("TIME SCORE:", 510, 420, 200, 100);
  // text: subtitle-text
  fill(255, 255, 255);
  textSize(25);
  text("YOU MADE THE TIME MACHINE WORK AGAIN!", 310, 220, 700, 100);
}
//////////////GAMEOVER SCREEN////////////////
function gameOverScreen() {
  // text: GAME OVER
  fill(255, 255, 255);
  textSize(90);
  // textFont(Copperplate);
  textAlign(CENTER, TOP);
  text("GAME OVER...", 620, 100);
}
//////////////START SCREEN////////////////
function startScreen() {
  // text: timemachine
  fill(255, 255, 255);
  textSize(90);
  // textFont(Copperplate);
  textAlign(CENTER, TOP);
  text("TIMEMACHINE", 590, 100);
  // text: history
  fill(255, 255, 255);
  textSize(15);
  text("History", 915, 500, 100, 100);
  // text: instructions
  fill(255, 255, 255);
  textSize(15);
  text("Instructions", 900, 520, 100, 100);
}
//////////////START SCREEN////////////////
function startScreen() {
  // text: timemachine
  fill(255, 255, 255);
  textSize(90);
  // textFont(Copperplate);
  textAlign(CENTER, TOP);
  text("TIMEMACHINE", 590, 100);
  // text: history
  fill(255, 255, 255);
  textSize(15);
  text("History", 915, 500, 100, 100);
  // text: instructions
  fill(255, 255, 255);
  textSize(15);
  text("Instructions", 900, 520, 100, 100);
}
//////////////LEVELS FUNCTIONS/////////////////////
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

  //jumping on the first box on the left
  if (p1X >= 190 && p1X <= 450 && p1Y >= 390 && p1Y <= 480 && jump === false) {
    p1Y = 390; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  //jumping on the top right small box
  if (p1X >= 500 && p1X <= 580 && p1Y >= 290 && p1Y <= 320 && jump === false) {
    p1Y = 290; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  // jumping on the top right big box
  if (p1X >= 560 && p1X <= 1160 && p1Y >= 260 && p1Y <= 320 && jump === false) {
    p1Y = 260; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  // jumping on the small floating box on top right
  if (p1X >= 740 && p1X <= 840 && p1Y >= 210 && p1Y <= 230 && jump === false) {
    p1Y = 210; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  // jumping on the small floating box on bottom right
  if (p1X >= 730 && p1X <= 820 && p1Y >= 450 && p1Y <= 470 && jump === false) {
    p1Y = 450; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }

  push();
  // character
  fill(0, 0, 0);
  //rect(p1X, p1Y, pWidth, pHeight);
  image(alienFront, p1X, p1Y, pWidth, pHeight);
  pop();

  if (p1X >= 200 && p1X <= 455 && p1Y >= 480 && p1Y <= 550) {
    isGameActive = false;
  }

  image(gear, 1080, 270, 40, 40);
  image(gear, 250, 400, 40, 40);
  image(gear, 600, 500, 40, 40);
}

function levelTwo() {
  background(178, 194, 131);
  liquidTwo(0, 0);
  ///////////////
  mapTwo(0, 0);
  borderTwo(0, 0);
  obstaclesTwo(0, 0);
  doorTwo(0, 0);

  //jumping on the first box from the left
  if (
    p1X >= 200 &&
    p1X <= 350 &&
    p1Y >= 440 &&
    p1Y <= minHeight &&
    jump === false
  ) {
    p1Y = p1Y; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  //jumping on the second box from the left
  if (
    p1X >= 330 &&
    p1X <= 420 &&
    p1Y >= 380 &&
    p1Y <= minHeight &&
    jump === false
  ) {
    p1Y = p1Y; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  //jumping on the third box from the left
  if (
    p1X >= 460 &&
    p1X <= 520 &&
    p1Y >= 320 &&
    p1Y <= minHeight &&
    jump === false
  ) {
    p1Y = p1Y; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }

  //jumping on the fourth box from the bottom
  if (
    p1X >= 520 &&
    p1X <= 600 &&
    p1Y >= 280 &&
    p1Y <= minHeight &&
    jump === false
  ) {
    p1Y = p1Y; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }

  //jumping on the fifth box from the bottom
  if (
    p1X >= 600 &&
    p1X <= 770 &&
    p1Y >= 370 &&
    p1Y <= minHeight &&
    jump === false
  ) {
    p1Y = p1Y; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  //jumping on the box floating on the bottom right
  if (p1X >= 815 && p1X <= 925 && p1Y >= 430 && p1Y <= 480 && jump === false) {
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
  ///////////////
  push();
  // character
  fill(0, 0, 0);
  rect(p1X, p1Y, pWidth, pHeight);
  pop();
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

function preload() {
  gear = loadImage("images/gear.png");
  alienFront = loadImage("images/alienFront.png");
}

//////////GRAVITY///////////////
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
//////////KEYPRESSED///////////////
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
//////////////FUNCTION MOUSECLICKED////////////////

function mouseClicked() {
  if (state === "start") {
    state = "levelOne";
  } else if (state === "levelOne") {
    state = "levelTwo";
  } else if (state === "levelTwo") {
    state = "levelThree";
  } else if (state === "levelThree") {
    state = "win";
  } else if (state === "win") {
    state = "fail";
  } else if (state === "fail") {
    state = "start";
  }
}

//////////////DRAW FUNCTION////////////////

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "levelOne") {
    levelOne();
  } else if (isGameActive && state === "levelTwo") {
    levelTwo();
  } else if (isGameActive && state === "levelThree") {
    levelThree();
  } else if (isGameActive === false && state === "win") {
    winScreen();
  } else if (isGameActive === false && state === "levelOne") {
    failScreen();
  }

  keyPressed();
  gravity();
}
