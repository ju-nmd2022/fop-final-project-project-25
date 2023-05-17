//we have watched this playlist of video tutorials https://youtu.be/FZlpuQeCvlk
let stage = 0;
let jump = false;
let characterState = false; // FALSE = idle, TRUE = walking
let walkingDirection = true; // TRUE = right, FALSE = left
let direction = 1; //forse of gravity in the y direction
let velocity = 2; // the speed of character
let jumpPower = 11; //how high character jumps
let fallingSpeed = 4; //equal to velocity
let minHeight = 455; // height of ground
let maxHeight = 50; // height of sky
let jumpCounter = 0;
//////////////
//////////////boxes variables////////////////
let p1X = 100; //position X for player
let p1Y = 455;
let pWidth = 50;
let pHeight = 95;

let b1X = 210;
let b1Y = 450;
let bWidth = 240;
let bHeight = 30;

////////////// Objectives in levels ////////////////
let gearsLVL1 = [];
let gearsLVL2 = [];
let gearsLVL3 = [];
let alienRight = [];
let alienLeft = [];

/////////////liquids in levels///////////////
let liquidLVL1 = [];
let liquidLVL2 = [];
let liquidLVL3 = [];

function initializeGameLogic() {
  gearsLVL1.push({
    image: "images/gear.png",
    positionX: 1080,
    positionY: 270,
  });
  gearsLVL1.push({
    image: "images/gear.png",
    positionX: 250,
    positionY: 400,
  });
  gearsLVL1.push({
    image: "images/gear.png",
    positionX: 600,
    positionY: 500,
  });
  ////////////////////////////
  gearsLVL2.push({
    image: "images/gear.png",
    positionX: 365,
    positionY: 390,
  });
  gearsLVL2.push({
    image: "images/gear.png",
    positionX: 1050,
    positionY: 170,
  });
  gearsLVL2.push({
    image: "images/gear.png",
    positionX: 700,
    positionY: 380,
  });
  ////////////////////////////
  gearsLVL3.push({
    image: "images/gear.png",
    positionX: 950,
    positionY: 350,
  });
  gearsLVL3.push({
    image: "images/gear.png",
    positionX: 70,
    positionY: 260,
  });
  gearsLVL3.push({
    image: "images/gear.png",
    positionX: 540,
    positionY: 350,
  });
}

//////STATE OF THE GAME/////////
let isGameActive = true;
let state = "levelOne";

function setup() {
  createCanvas(1200, 600);
  initializeGameLogic();
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
////////////////LIQUID'S CONSTRUCTOR CLASS///////////////
class Liquid {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  display() {
    rect(this.x, this.y, this.width, this.height);
  }
}
////////////////////SCORES/////////////////////
function showScoreLevel1() {
  push();
  stroke(20);
  noFill();
  text(3 - gearsLVL1.length, 60, 70);
  pop();
}

function showScoreLevel2() {
  push();
  stroke(20);
  noFill();
  text(3 - gearsLVL2.length, 60, 70);
  pop();
}

function showScoreLevel3() {
  push();
  stroke(20);
  noFill();
  text(3 - gearsLVL3.length, 60, 70);
  pop();
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
  if ((state = "levelOne")) {
    fill(255, random(140, 150), 0);
    push();
    drawingContext.shadowBlur = 5;
    drawingContext.shadowColor = "red";
    noStroke();
    liquidLVL1.push(new Liquid(x + 200, y + 550, 260, 30)); // liquid 1 on bottom left
    liquidLVL1.push(new Liquid(x + 680, y + 550, 190, 30)); // liquid 2 on the bottom right
    liquidLVL1.push(new Liquid(x + 700, y + 320, 200, 30)); // liquid 3 on top right
    pop();
  }
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
  if ((state = "levelTwo")) {
    fill(85, random(100, 110), 47);
    push();
    noStroke();
    drawingContext.shadowBlur = 5;
    drawingContext.shadowColor = "green";
    liquidLVL2.push(new Liquid(150, 550, 850, 30)); // liquid 1 on all the bottom
    liquidLVL2.push(new Liquid(910, 220, 80, 30)); // liquid 2 on right top
    pop();
  }
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
  if ((state = "levelThree")) {
    fill(255, 215, 0);
    push();
    noStroke();
    drawingContext.shadowBlur = 5;
    drawingContext.shadowColor = "orange";
    liquidLVL3.push(new Liquid(240, 540, 540, 30)); // liquid 1 on all bottom
    liquidLVL3.push(new Liquid(130, 310, 70, 30)); // liquid 2 on the bottom right

    pop();
  }
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
  background(0, 0, 0);
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
  startButton.hide();
}
//////////////GAMEOVER SCREEN////////////////
function failScreen() {
  background(0, 0, 0);
  // text: GAME OVER
  fill(255, 255, 255);
  textSize(90);
  // textFont(Copperplate);
  textAlign(CENTER, TOP);
  text("GAME OVER...", 620, 100);
  startButton.hide();
}
//////////////START SCREEN////////////////
function startScreen() {
  background(0, 0, 0);
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
  startButton.show();
}

//////////////LEVELS FUNCTIONS/////////////////////
function levelOne() {
  background(255, 252, 186);
  liquidOne(0, 0);
  //let the liquids display
  for (let i = 0; i < liquidLVL1.length; i++) {
    liquidLVL1[i].display();
  }
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
  startButton.hide();
  ///////////////

  //jumping on the first box on the left
  if (p1X >= 190 && p1X <= 450 && p1Y >= 355 && p1Y <= 445 && jump === false) {
    p1Y = 355; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  //jumping on the top right small box
  if (p1X >= 500 && p1X <= 580 && p1Y >= 255 && p1Y <= 285 && jump === false) {
    p1Y = 255; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  // jumping on the top right big box
  if (p1X >= 560 && p1X <= 1160 && p1Y >= 225 && p1Y <= 285 && jump === false) {
    p1Y = 225; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  // jumping on the small floating box on top right
  if (p1X >= 740 && p1X <= 840 && p1Y >= 175 && p1Y <= 195 && jump === false) {
    p1Y = 175; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  // jumping on the small floating box on bottom right
  if (p1X >= 730 && p1X <= 820 && p1Y >= 415 && p1Y <= 445 && jump === false) {
    p1Y = 415; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }

  push();
  // character
  fill(0, 0, 0);
  //rect(p1X, p1Y, pWidth, pHeight);
  if (characterState) {
    if (walkingDirection) {
      image(alienRight[0], p1X, p1Y, pWidth, pHeight);
    } else {
      image(alienLeft[0], p1X, p1Y, pWidth, pHeight);
    }
  } else {
    image(alienFront, p1X, p1Y, pWidth, pHeight);
  }
  pop();

  if (p1X >= 200 && p1X <= 455 && p1Y >= 480 && p1Y <= 550) {
    isGameActive = false;
  }

  for (let currentGear of gearsLVL1) {
    image(gear, currentGear.positionX, currentGear.positionY, 40, 40);
  }
}

function levelTwo() {
  background(178, 194, 131);
  liquidTwo(0, 0);
  //let the liquids display
  for (let i = 0; i < liquidLVL2.length; i++) {
    liquidLVL2[i].display();
  }
  ///////////////
  mapTwo(0, 0);
  borderTwo(0, 0);
  obstaclesTwo(0, 0);
  doorTwo(0, 0);
  startButton.hide();

  //jumping on the first box from the left
  if (
    p1X >= 200 &&
    p1X <= 350 &&
    p1Y >= 405 &&
    p1Y <= minHeight &&
    jump === false
  ) {
    p1Y = 405; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  //jumping on the second box from the left
  if (
    p1X >= 330 &&
    p1X <= 420 &&
    p1Y >= 345 &&
    p1Y <= minHeight &&
    jump === false
  ) {
    p1Y = 345; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  //jumping on the third box from the left
  if (
    p1X >= 460 &&
    p1X <= 520 &&
    p1Y >= 285 &&
    p1Y <= minHeight &&
    jump === false
  ) {
    p1Y = 285; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }

  //jumping on the fourth box from the bottom
  if (
    p1X >= 500 &&
    p1X <= 600 &&
    p1Y >= 245 &&
    p1Y <= minHeight &&
    jump === false
  ) {
    p1Y = 245; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }

  //jumping on the fifth box from the bottom
  if (
    p1X >= 600 &&
    p1X <= 770 &&
    p1Y >= 335 &&
    p1Y <= minHeight &&
    jump === false
  ) {
    p1Y = 335; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  //jumping on the box floating on the bottom right
  if (p1X >= 815 && p1X <= 925 && p1Y >= 395 && p1Y <= 445 && jump === false) {
    p1Y = 395; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  //jumping on the first box from the right on the top
  if (p1X >= 830 && p1X <= 1160 && p1Y >= 125 && p1Y <= 205 && jump === false) {
    p1Y = 125; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  //jumping on the second box from the right on the top
  if (p1X >= 620 && p1X <= 850 && p1Y >= 175 && p1Y <= 205 && jump === false) {
    p1Y = 175; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  ///////////////
  push();
  // character
  fill(0, 0, 0);
  // rect(p1X, p1Y, pWidth, pHeight);
  if (characterState) {
    if (walkingDirection) {
      image(alienRight[0], p1X, p1Y, pWidth, pHeight);
    } else {
      image(alienLeft[0], p1X, p1Y, pWidth, pHeight);
    }
  } else {
    image(alienFront, p1X, p1Y, pWidth, pHeight);
  }
  pop();

  if (p1X >= 200 && p1X <= 455 && p1Y >= 480 && p1Y <= 550) {
    isGameActive = false;
  }

  for (let currentGear of gearsLVL2) {
    image(gear, currentGear.positionX, currentGear.positionY, 40, 40);
  }
}

function levelThree() {
  push();
  noStroke();
  background(0, 0, 0);
  liquidThree(0, 0);
  //let the liquids display
  for (let i = 0; i < liquidLVL3.length; i++) {
    liquidLVL3[i].display();
  }
  startButton.hide();
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
  if (p1X >= 0 && p1X <= 330 && p1Y >= 215 && p1Y <= 265 && jump === false) {
    p1Y = 215; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  //jumping on the first box
  if (
    p1X >= 290 &&
    p1X <= 400 &&
    p1Y >= 385 &&
    p1Y <= minHeight &&
    jump === false
  ) {
    p1Y = 385; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  // jumping on the second box
  if (
    p1X >= 380 &&
    p1X <= 600 &&
    p1Y >= 305 &&
    p1Y <= minHeight &&
    jump === false
  ) {
    p1Y = 305; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  // jumping on the third box
  if (
    p1X >= 630 &&
    p1X <= 750 &&
    p1Y >= 375 &&
    p1Y <= minHeight &&
    jump === false
  ) {
    p1Y = 375; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  // jumping on the small floating box on the right
  if (p1X >= 800 && p1X <= 1000 && p1Y >= 305 && p1Y <= 345 && jump === false) {
    p1Y = 305; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }

  push();
  // character
  fill(255, 255, 255);
  // rect(p1X, p1Y, pWidth, pHeight);
  if (characterState) {
    if (walkingDirection) {
      image(alienRight[0], p1X, p1Y, pWidth, pHeight);
    } else {
      image(alienLeft[0], p1X, p1Y, pWidth, pHeight);
    }
  } else {
    image(alienFront, p1X, p1Y, pWidth, pHeight);
  }
  pop();

  if (p1X >= 200 && p1X <= 455 && p1Y >= 480 && p1Y <= 550) {
    isGameActive = false;
  }

  for (let currentGear of gearsLVL3) {
    image(gear, currentGear.positionX, currentGear.positionY, 40, 40);
  }
}

////////////////////COLLISION//////////////////////

function checkCollision() {
  ///////////////////COLLISION FOR GEARS/////////////
  for (let gear of gearsLVL1) {
    if (
      p1X >= gear.positionX &&
      p1X <= gear.positionX + 40 &&
      p1Y + pHeight >= gear.positionY &&
      p1Y + pHeight <= gear.positionY + 55
    ) {
      gearsLVL1.splice(gearsLVL1.indexOf(gear), 1);
    }
  }
  ///////////////////
  for (let gear of gearsLVL2) {
    if (
      p1X >= gear.positionX &&
      p1X <= gear.positionX + 40 &&
      p1Y + pHeight >= gear.positionY &&
      p1Y + pHeight <= gear.positionY + 55
    ) {
      gearsLVL2.splice(gearsLVL2.indexOf(gear), 1);
    }
  }
  ///////////////////
  for (let gear of gearsLVL3) {
    if (
      p1X >= gear.positionX &&
      p1X <= gear.positionX + 40 &&
      p1Y + pHeight >= gear.positionY &&
      p1Y + pHeight <= gear.positionY + 55
    ) {
      gearsLVL3.splice(gearsLVL3.indexOf(gear), 1);
    }
  }
  ///////////////COLLISION FOR LIQUIDS//////////////////
  // Check collisions for liquids in level 1
  // Check collisions for liquids in level 1
  for (let i = 0; i < liquidLVL1.length; i++) {
    let liquid = liquidLVL1[i];
    if (collidesWithPlayer(p1X, p1Y, pWidth, pHeight, liquid)) {
      console.log("Collided with liquid in level 1");
      // End game or perform other actions
    }
  }

  // Check collisions for liquids in level 2
  for (let i = 0; i < liquidLVL2.length; i++) {
    let liquid = liquidLVL2[i];
    if (collidesWithPlayer(p1X, p1Y, pWidth, pHeight, liquid)) {
      console.log("Collided with liquid in level 2");
      // End game or perform other actions
    }
  }

  // Check collisions for liquids in level 3
  for (let i = 0; i < liquidLVL3.length; i++) {
    let liquid = liquidLVL3[i];
    if (collidesWithPlayer(p1X, p1Y, pWidth, pHeight, liquid)) {
      console.log("Collided with liquid in level 3");
      // End game or perform other actions
    }
  }
}

function collidesWithPlayer(p1X, p1Y, pWidth, pHeight, liquid) {
  // Define bounding boxes for player character and liquid
  let playerBox = { x: p1X, y: p1Y, width: pWidth, height: pHeight };
  let liquidBox = {
    x: liquid.x,
    y: liquid.y,
    width: liquid.width,
    height: liquid.height,
  };

  // Check if bounding boxes overlap
  return (
    playerBox.x < liquidBox.x + liquidBox.width &&
    playerBox.x + playerBox.width > liquidBox.x &&
    playerBox.y < liquidBox.y + liquidBox.height &&
    playerBox.y + playerBox.height > liquidBox.y
  );
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
    characterState = true;
    walkingDirection = false;
  } else if (keyIsDown(39)) {
    p1X = p1X + 5; // move right
    characterState = true;
    walkingDirection = true;
  }

  if (keyIsDown(38)) {
    jump = true;
  } else {
    jump = false;
  }
}

function keyReleased() {
  characterState = false;
}

function preload() {
  gear = loadImage("images/gear.png");
  alienFront = loadImage("images/alienFront.png");
  alienRight[0] = loadImage("images/alienWalkingRight.gif");

  alienLeft[0] = loadImage("images/alienWalkingLeft.gif");
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
  } else if (isGameActive === false && state === "fail") {
    failScreen();
  }

  keyPressed();
  gravity();
  checkCollision();
  showScoreLevel1();
  showScoreLevel2();
  showScoreLevel3();
}
