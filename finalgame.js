//we have watched this playlist of video tutorials https://youtu.be/FZlpuQeCvlk

let jump = false;
let characterState = false; // FALSE = idle, TRUE = walking
let walkingDirection = true; // TRUE = right, FALSE = left
let direction = 1; //forse of gravity in the y direction
let velocity = 6; // the speed of character
let jumpPower = 11.5; //how high character jumps
let fallingSpeed = 6; //equal to velocity
let minHeight = 455; // height of ground
let maxHeight = 50; // height of sky
let jumpCounter = 0;
let walkingRight;
//////////////
let timer = 30;
let countDown;
//////////////boxes variables////////////////
let p1X = 80; //position X for player
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

/////////////obstacles in levels///////////////
let obstaclesLVL1 = [];
let obstaclesLVL2 = [];
let obstaclesLVL3 = [];

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
let state = "fail";

function setup() {
  createCanvas(1200, 600);
  frameRate(30);

  initializeGameLogic();
  // start button
  startButton = createButton("START");
  startButton.mousePressed(startPlay);
  startButton.position(510, 320);
  startButton.style("color:black");
  // startButton.style.fontFamily = "Copperplate";
  startButton.style("background-color:red");
  startButton.style("border", "none");
  startButton.style("border-radius", "10px");
  startButton.size(180, 70);
  startButton.style("font-size", "35px");
  startButton.addClass("redButtons");
  startButton.hide();

  // history button
  historyButton = createButton("History");
  historyButton.mousePressed(historyPlay);
  historyButton.position(980, 497);
  historyButton.style("color:white");
  historyButton.style("background-color:black");
  historyButton.style("border-radius", "10px");
  historyButton.style("border", "none");
  historyButton.size(120, 30);
  historyButton.style("font-size", "20px");
  historyButton.addClass("textButton");
  historyButton.hide();
  // instructions button
  instructionsButton = createButton("Instructions");
  instructionsButton.mousePressed(instructionsPlay);
  instructionsButton.position(960, 530);
  instructionsButton.style("color:white");
  instructionsButton.style("background-color:black");
  instructionsButton.style("border-radius", "10px");
  instructionsButton.style("border", "none");
  instructionsButton.size(120, 30);
  instructionsButton.style("font-size", "20px");
  instructionsButton.addClass("textButton");
  instructionsButton.hide();
  // button OK!
  okButton = createButton("Go back");
  okButton.mousePressed(goBackPlay);
  okButton.position(180, 430);
  okButton.style("color:black");
  okButton.style("background-color:white");
  okButton.style("border-radius", "10px");
  okButton.style("border", "none");
  okButton.size(120, 60);
  okButton.style("font-size", "20px");
  okButton.addClass("okButton");
  okButton.hide();
  // play again button winscreen
  winButton = createButton("PLAY AGAIN");
  winButton.mousePressed(winPlay);
  winButton.position(530, 320);
  winButton.style("color:black");
  winButton.style("background-color:red");
  winButton.style("border-radius", "10px");
  winButton.style("border", "none");
  winButton.size(180, 70);
  winButton.style("font-size", "30px");
  winButton.addClass("redButtons");
  winButton.hide();

  // try again button failscreen
  failButton = createButton("TRY AGAIN");
  failButton.mousePressed(failPlay);
  failButton.position(530, 320);
  failButton.style("color:black");
  failButton.style("background-color:red");
  failButton.style("border-radius", "10px");
  failButton.style("border", "none");
  failButton.size(180, 70);
  failButton.style("font-size", "30px");
  failButton.addClass("redButtons");
  failButton.hide();
  //GIF ANIMATION
  // alienWalkingRight = createImg("images/alienWalkingRight.gif");
  // alienWalkingLeft = createImg("images/alienWalkingLeft.gif");

  // // Set the position and size of the animations
  // alienWalkingRight.position(100, 100);
  // alienWalkingRight.size(100, 100);
  // alienWalkingLeft.position(100, 100);
  // alienWalkingLeft.size(100, 100);
}

///////////////OBSTACLE CLASS/////////////////

class Obstacle {
  //aggiungi nei parametri in che livello siamo
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  display() {
    // rect(this.x, this.y, this.width, this.height);
  }
}

////////////////LIQUID'S CONSTRUCTOR CLASS///////////////
class Liquid {
  constructor(x, y, width, height, level) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.level = level;
  }

  display() {
    push();
    if (this.level === 1) {
      fill(255, random(135, 150), 0);
      noStroke();
      drawingContext.shadowBlur = 2;
      drawingContext.shadowColor = "orange";
      rect(this.x, this.y, this.width, this.height);
    } else if (this.level === 2) {
      fill(85, random(100, 110), 47);
      noStroke();
      drawingContext.shadowBlur = 2;
      drawingContext.shadowColor = "green";
      rect(this.x, this.y, this.width, this.height);
    } else if (this.level === 3) {
      fill(255, 215, 0);
      noStroke();
      drawingContext.shadowBlur = 2;
      drawingContext.shadowColor = "orange";
      rect(this.x, this.y, this.width, this.height);
    }
    pop();
  }
}
////////////////////SCORES/////////////////////
function showScoreLevel1() {
  push();
  fill(0, 0, 0);
  noStroke();
  textSize(20);
  textFont("copperplate");
  text("Gears collected: " + (3 - gearsLVL1.length), 158, 90);
  if (gearsLVL1.length === 0) {
    doorOneColorChange(0, 0);
  } else {
    doorOne(0, 0); // Call the doorOne() function to draw the black door
  }
  pop();
}

function resetGearsLVL1() {
  gearsLVL1 = []; // Reset the gearsLVL1 array to its initial state
}

function doorOne(x, y) {
  push();
  drawingContext.shadowBlur = 2;
  drawingContext.shadowColor = "white";
  fill(225, 193, 110);
  stroke(0); // Add stroke color (black)
  rect(x + 1020, y + 450, 90, 100);
  fill(255, 223, 150);
  rect(x + 1030, y + 460, 70, 90);
  pop();
}

function doorOneColorChange(x, y) {
  push();
  strokeWeight(1);
  fill(225, 193, 110);
  rect(x + 1020, y + 450, 90, 100);
  fill(0, 0, 0);
  rect(x + 1030, y + 460, 70, 90);
  pop();
}

function showScoreLevel2() {
  push();
  fill(0, 0, 0);
  noStroke();
  textSize(20);
  textFont("copperplate");
  text("Gears collected: " + (3 - gearsLVL2.length), 158, 90);
  if (gearsLVL2.length === 0) {
    doorTwoColorChange(0, 0);
  } else {
    doorTwo(0, 0); // Call the doorTwo() function to draw the black door
  }
  pop();
}

function resetGearsLVL2() {
  gearsLVL2 = []; // Reset the gearsLVL2 array to its initial state
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

function doorTwoColorChange(x, y) {
  push();
  strokeWeight(1);
  fill(111, 85, 55);
  rect(x + 1020, y + 450, 90, 100);
  fill(0, 0, 0);
  rect(x + 1030, y + 460, 70, 90);
  pop();
}

function showScoreLevel3() {
  push();
  fill(255, 255, 255);
  noStroke();
  textSize(20);
  textFont("copperplate");
  text("Gears collected: " + (3 - gearsLVL3.length), 158, 90);

  if (gearsLVL3.length === 0) {
    doorThreeColorChange(0, 0);
  } else {
    doorThree(0, 0); // Call the doorThree() function to draw the black door
  }
  pop();
}

function resetGearsLVL3() {
  gearsLVL3 = []; // Reset the gearsLVL3 array to its initial state
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

function doorThreeColorChange(x, y) {
  push();
  strokeWeight(1);
  fill(200, 200, 200);
  rect(x + 1020, y + 450, 90, 100);
  fill(255, 255, 255);
  rect(x + 1030, y + 460, 70, 90);
  pop();
}

//////////////LEVELONE SCREEN////////////////
function obstaclesOne(x, y) {
  // Create obstacles and add them to the array
  obstaclesLVL1.push(new Obstacle(1000, 308, 40, 12)); // Obstacle 1
  obstaclesLVL1.push(new Obstacle(330, 438, 40, 12)); // Obstacle 2

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
  liquidLVL1.push(new Liquid(200, 550, 260, 30, 1)); // liquid 1 on bottom left
  liquidLVL1.push(new Liquid(680, 550, 190, 30, 1)); // liquid 2 on the bottom right
  liquidLVL1.push(new Liquid(700, 320, 200, 30, 1)); // liquid 3 on top right
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

//////////////LEVELTWO SCREEN////////////////
function obstaclesTwo(x, y) {
  ///////////////////////
  obstaclesLVL2.push(new Obstacle(310, 488, 40, 12)); // Obstacle 1
  obstaclesLVL2.push(new Obstacle(720, 258, 40, 12)); // Obstacle 2

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
  liquidLVL2.push(new Liquid(150, 550, 850, 30, 2)); // liquid 1 on all the bottom
  liquidLVL2.push(new Liquid(910, 220, 80, 30, 2)); // liquid 2 on right top
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

//////////////LEVELTHREE SCREEN////////////////
function obstaclesThree(x, y) {
  ///////////////////////
  obstaclesLVL3.push(new Obstacle(880, 388, 40, 12)); // Obstacle 1
  obstaclesLVL3.push(new Obstacle(480, 388, 40, 12)); // Obstacle 2

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
  liquidLVL3.push(new Liquid(240, 550, 540, 30, 3)); // liquid 1 on all bottom
  liquidLVL3.push(new Liquid(130, 310, 70, 30, 3)); // liquid 2 on the bottom right
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

//////////////WIN SCREEN////////////////
function winScreen() {
  push();
  background(0, 0, 0);
  // text: YOU WIN!
  fill(255, 255, 255);
  textSize(90);
  textFont("copperplate");
  textAlign(CENTER, TOP);
  text("YOU WON",600,140);
  fill(255, 255, 255);
  textSize(25);
  textAlign(CENTER, TOP);
  text("YOU MADE THE TIME MACHINE WORK AGAIN!", 600, 240);
  pop();
  startButton.hide();
  failButton.hide();
  winButton.show();
  historyButton.hide();
  instructionsButton.hide();
  okButton.hide();
}
//////////////GAMEOVER SCREEN////////////////
function failScreen() {
  background(0, 0, 0);
  // text: GAME OVER
  fill(255, 255, 255);
  textSize(90);
  // textFont(Copperplate);
  textAlign(CENTER, TOP);
  text("GAME OVER", 600, 140);
  startButton.hide();
  failButton.show();
  winButton.hide();
  historyButton.hide();
  instructionsButton.hide();
  okButton.hide();
}
//////////////START SCREEN////////////////
function startScreen() {
  background(0, 0, 0);
  fill(255, 255, 255);
  textFont("copperplate");
  textSize(100);
  textAlign(CENTER, TOP);
  text("TimeMachine", 600, 140);
  startButton.show();
  failButton.hide();
  winButton.hide();
  historyButton.show();
  instructionsButton.show();
  okButton.hide();
}
///////////////////HISTORY SCREEN//////////////////
function historyScreen() {
  background(0, 0, 0);
  // text: History
  fill(255, 255, 255);
  textSize(60);
  // textFont(Copperplate);
  textAlign(CENTER, TOP);
  text("History", 590, 30);
  // text: the little story about time traveling
  fill(255, 255, 255);
  textSize(15);
  textAlign(LEFT, TOP);
  textLeading(25); //to make a bigger line spacing
  text(
    "Our game character is an adventurous time traveler, exploring the depths of time and space in his trusty time machine. However, during one of his expeditions, disaster struck, and his machine broke into pieces. \n The only way to fix it is to collect gears scattered across three different locations - the ancient Egyptian pyramids, a mysterious forest, and the vast expanse of space.\n The levels get progressively more challenging, with each level presenting new obstacles and dangers to avoid. \n To advance to the next level, the player must collect all the gears and reach the door that will transport them to the next location. \n The levels must be completed in order, with no level map screen to guide the player. If the player touches any of the obstacles - spikes or dangerous liquids - they will be sent back to the beginning of the first level. Additionally, the game includes a timer, and if the time runs out, the player must start from the first level again. \n Can you help our time traveler fix his machine and continue his exciting journey through time and space? Join the adventure and find out!",
    470,
    120,
    600,
    900
  );
  startButton.hide();
  failButton.hide();
  winButton.hide();
  historyButton.hide();
  instructionsButton.hide();
  okButton.show();
}
///////////////////////INSTRUCTIONS SCREEN///////////////
function instructionsScreen() {
  background(0, 0, 0);
  // text: instructions title
  fill(255, 255, 255);
  textFont("copperplate");
  textSize(60);
  // textFont(Copperplate);
  textAlign(CENTER, TOP);
  text("INSTRUCTIONS", 620, 60);
  // text: instructions how to move etc made as an array
  let instructionsList = [
    "Use the arrow keys to move the time traveler in all directions",
    "Collect all the gears to fix the time machine",
    "Avoid the deadly obstacles along the way",
    "After collecting all items go through the appearing door to advance in level",
    "If you die, the character will start over the game from the 1st level.",
    "Pass all levels to win",
  ];
  // helped by chatGPT in the next 5 lines of code on how to make the array display vertically
  let x = 390; // Set the initial x position
  let y = 170; // Set the initial y position
  for (let i = 0; i < instructionsList.length; i++) {
    fill(255, 255, 255);
    textSize(15);
    textAlign(LEFT, TOP);
    textLeading(35);
    textFont("Copperplate");
    text(instructionsList[i], x, y, 700, 700); // Draw the list item with the bullet point
    y += textLeading(); // Increment the y position by the line spacing
  }
  startButton.hide();
  failButton.hide();
  winButton.hide();
  historyButton.hide();
  instructionsButton.hide();
  okButton.show();
}
//////////////LEVELS FUNCTIONS/////////////////////
function levelOne() {
  background(255, 252, 186);
  showScoreLevel1();
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
  startButton.hide();
  failButton.hide();
  winButton.hide();
  historyButton.hide();
  instructionsButton.hide();
  okButton.hide();
  ///////////////

  //jumping on the first box on the left
  if (p1X >= 190 && p1X <= 430 && p1Y >= 355 && p1Y <= 445 && jump === false) {
    p1Y = 355; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  //jumping on the top right small box
  if (p1X >= 500 && p1X <= 560 && p1Y >= 255 && p1Y <= 285 && jump === false) {
    p1Y = 255; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  // jumping on the top right big box
  if (p1X >= 560 && p1X <= 1140 && p1Y >= 225 && p1Y <= 285 && jump === false) {
    p1Y = 225; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  // jumping on the small floating box on top right
  if (p1X >= 740 && p1X <= 820 && p1Y >= 175 && p1Y <= 195 && jump === false) {
    p1Y = 175; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  // jumping on the small floating box on bottom right
  if (p1X >= 730 && p1X <= 800 && p1Y >= 415 && p1Y <= 445 && jump === false) {
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

  // if (p1X >= 200 && p1X <= 455 && p1Y >= 480 && p1Y <= 550) {
  //   isGameActive = false;
  // }

  for (let currentGear of gearsLVL1) {
    image(gear, currentGear.positionX, currentGear.positionY, 40, 40);
  }

  for (let i = 0; i < obstaclesLVL1.length; i++) {
    obstaclesLVL1[i].display();
  }

  showTimer1();
}

function levelTwo() {
  background(178, 194, 131);
  showScoreLevel2();
  liquidTwo(0, 0);
  resetTimer();
  //let the liquids display
  for (let i = 0; i < liquidLVL2.length; i++) {
    liquidLVL2[i].display();
  }

  ///////////////
  mapTwo(0, 0);
  borderTwo(0, 0);
  obstaclesTwo(0, 0);
  startButton.hide();
  failButton.hide();
  winButton.hide();
  historyButton.hide();
  instructionsButton.hide();
  okButton.hide();

  //jumping on the first box from the left
  if (
    p1X >= 200 &&
    p1X <= 330 &&
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
    p1X <= 400 &&
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
    p1X <= 500 &&
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
    p1X <= 580 &&
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
    p1X <= 750 &&
    p1Y >= 335 &&
    p1Y <= minHeight &&
    jump === false
  ) {
    p1Y = 335; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  //jumping on the box floating on the bottom right
  if (p1X >= 815 && p1X <= 905 && p1Y >= 395 && p1Y <= 445 && jump === false) {
    p1Y = 395; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  //jumping on the first box from the right on the top
  if (p1X >= 830 && p1X <= 1140 && p1Y >= 125 && p1Y <= 205 && jump === false) {
    p1Y = 125; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  //jumping on the second box from the right on the top
  if (p1X >= 620 && p1X <= 830 && p1Y >= 175 && p1Y <= 205 && jump === false) {
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

  for (let i = 0; i < obstaclesLVL2.length; i++) {
    obstaclesLVL2[i].display();
  }

  showTimer2();
}

function levelThree() {
  push();
  noStroke();
  background(0, 0, 0);
  showScoreLevel3();
  resetTimer();
  liquidThree(0, 0);
  //let the liquids display
  for (let i = 0; i < liquidLVL3.length; i++) {
    liquidLVL3[i].display();
  }
  startButton.hide();
  failButton.hide();
  winButton.hide();
  historyButton.hide();
  instructionsButton.hide();
  okButton.hide();
  ///////////////
  //box 1
  fill(0, 0, 0);
  rect(b1X, b1Y, bWidth, bHeight);
  pop();

  mapThree(0, 0);
  borderThree(0, 0);
  obstaclesThree(0, 0);

  ///////////////
  //jumping on the box on the left top
  if (p1X >= 0 && p1X <= 310 && p1Y >= 215 && p1Y <= 265 && jump === false) {
    p1Y = 215; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  //jumping on the first box
  if (
    p1X >= 290 &&
    p1X <= 380 &&
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
    p1X <= 580 &&
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
    p1X <= 730 &&
    p1Y >= 375 &&
    p1Y <= minHeight &&
    jump === false
  ) {
    p1Y = 375; // don't fall through
    velocity = 0;
    jumpCounter = 0;
  }
  // jumping on the small floating box on the right
  if (p1X >= 800 && p1X <= 985 && p1Y >= 305 && p1Y <= 345 && jump === false) {
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

  for (let i = 0; i < obstaclesLVL3.length; i++) {
    obstaclesLVL3[i].display();
  }

  showTimer3();
}

////////////////////COLLISION//////////////////////

function checkCollision() {
  ///////////////////COLLISION FOR GEARS/////////////
  for (let gear of gearsLVL1) {
    if (
      state === "levelOne" &&
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
      state === "levelTwo" &&
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
      state === "levelThree" &&
      p1X >= gear.positionX &&
      p1X <= gear.positionX + 40 &&
      p1Y + pHeight >= gear.positionY &&
      p1Y + pHeight <= gear.positionY + 55
    ) {
      gearsLVL3.splice(gearsLVL3.indexOf(gear), 1);
    }
  }
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
  if (isGameActive === true && keyIsDown(37)) {
    walkingRight = false;
    p1X = p1X - 5; //move left
    characterState = true;
    walkingDirection = false;
  } else if (isGameActive === true && keyIsDown(39)) {
    walkingRight = true;
    p1X = p1X + 5; // move right
    characterState = true;
    walkingDirection = true;
  }

  if (isGameActive === true && keyIsDown(38)) {
    jump = true;
  } else {
    jump = false;
    isGameActive === false;
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

function historyPlay() {
  state = "history";
}

function instructionsPlay() {
  state = "instructions";
}

function goBackPlay() {
  state = "start";
}

function startPlay() {
  state = "levelOne";
  isGameActive = true;
}

function winPlay() {
  state = "levelOne";
  isGameActive = true;
  p1X = 100; //position X for player
  p1Y = 455;
  resetGearsLVL1();
  resetGearsLVL2();
  resetGearsLVL3();
  initializeGameLogic();
}

function failPlay() {
  timer = 30;
  state = "levelOne";
  isGameActive = true;
  p1X = 100; //position X for player
  p1Y = 455;
  resetGearsLVL1();
  resetGearsLVL2();
  resetGearsLVL3();
  initializeGameLogic();
}
/////////////////TIMER FUNCTION//////////////////
function showTimer1() {
  textAlign(CENTER, CENTER);
  push();
  textSize(20);
  textFont("copperplate");
  fill(0, 0, 0);
  text("Timer: " + timer, 120, 120);
  noStroke();
  pop();
  if (frameCount % 30 == 0 && timer > 0) {
    timer--;
  }
  if (timer <= 0) {
    failScreen();
    isGameActive = false;
  }
}
function showTimer2() {
  textAlign(CENTER, CENTER);
  push();
  textSize(20);
  textFont("copperplate");
  fill(0, 0, 0);
  text("Timer: " + timer, 120, 120);
  noStroke();
  pop();
  if (frameCount % 30 == 0 && timer > 0) {
    timer--;
  }
  if (timer <= 0) {
    failScreen();
    isGameActive = false;
  }
}
function showTimer3() {
  textAlign(CENTER, CENTER);
  push();
  textSize(20);
  textFont("copperplate");
  fill(255, 255, 255);
  text("Timer: " + timer, 120, 120);
  noStroke();
  pop();
  if (frameCount % 30 == 0 && timer > 0) {
    timer--;
  }
  if (timer <= 0) {
    failScreen();
    isGameActive = false;
  }
}
function resetTimer() {
  timer = 30; // Reset the timer to its initial value
}
//////////////DRAW FUNCTION///////////////
function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "instructions") {
    instructionsScreen();
  } else if (state === "history") {
    historyScreen();
  } else if (state === "levelOne") {
    levelOne();
  } else if (state === "levelTwo") {
    levelTwo();
  } else if (state === "levelThree") {
    levelThree();
  } else if (state === "win") {
    winScreen();
  } else if (state === "fail") {
    failScreen();
  }

  ///////////////////// switching the levels//////////////////
  if (state === "levelOne") {
    for (let i = 0; i < liquidLVL1.length; i++) {
      let liquid = liquidLVL1[i];
      if (
        (walkingRight === false &&
          p1X >= liquid.x &&
          p1X <= liquid.x + liquid.width - pWidth / 2 &&
          p1Y + pHeight >= liquid.y &&
          p1Y + pHeight <= liquid.y + 55) ||
        (walkingRight === true &&
          p1X >= liquid.x - pWidth / 2 &&
          p1X <= liquid.x + liquid.width &&
          p1Y + pHeight >= liquid.y &&
          p1Y + pHeight <= liquid.y + 55)
      ) {
        // Collision detected, end the game
        isGameActive = false; // Set the game state to inactive
        failScreen();
      }
      if (
        p1X > 1020 &&
        p1X < 1110 &&
        p1Y > 450 &&
        p1Y < 550 &&
        gearsLVL1.length === 0
      ) {
        state = "levelTwo";
        p1X = 70;
        p1Y = 455;
        gearsLVL2.length === 3;
      }
    }

    for (let i = 0; i < obstaclesLVL1.length; i++) {
      let obstacle = obstaclesLVL1[i];
      if (
        (walkingRight === false &&
          p1X >= obstacle.x &&
          p1X <= obstacle.x + obstacle.width - pWidth / 2 &&
          p1Y + pHeight >= obstacle.y &&
          p1Y + pHeight <= obstacle.y + 55) ||
        (walkingRight === true &&
          p1X >= obstacle.x - pWidth / 2 &&
          p1X <= obstacle.x + obstacle.width &&
          p1Y + pHeight >= obstacle.y &&
          p1Y + pHeight <= obstacle.y + 55)
      ) {
        // Collision detected, end the game
        isGameActive = false; // Set the game state to inactive
        failScreen();
      }
    }
  } else if (state === "levelTwo") {
    for (let i = 0; i < obstaclesLVL2.length; i++) {
      let obstacle = obstaclesLVL2[i];
      if (
        (walkingRight === false &&
          p1X >= obstacle.x &&
          p1X <= obstacle.x + obstacle.width - pWidth / 2 &&
          p1Y + pHeight >= obstacle.y &&
          p1Y + pHeight <= obstacle.y + 55) ||
        (walkingRight === true &&
          p1X >= obstacle.x - pWidth / 2 &&
          p1X <= obstacle.x + obstacle.width &&
          p1Y + pHeight >= obstacle.y &&
          p1Y + pHeight <= obstacle.y + 55)
      ) {
        // Collision detected, end the game
        failScreen();
        isGameActive = false;
      }
    }

    for (let i = 0; i < liquidLVL2.length; i++) {
      let liquid = liquidLVL2[i];
      if (
        (walkingRight === false &&
          p1X >= liquid.x &&
          p1X <= liquid.x + liquid.width - pWidth / 2 &&
          p1Y + pHeight >= liquid.y &&
          p1Y + pHeight <= liquid.y + 55) ||
        (walkingRight === true &&
          p1X >= liquid.x - pWidth / 2 &&
          p1X <= liquid.x + liquid.width &&
          p1Y + pHeight >= liquid.y &&
          p1Y + pHeight <= liquid.y + 55)
      ) {
        // Collision detected, end the game
        failScreen();
        isGameActive = false;
      }
      if (
        p1X > 1020 &&
        p1X < 1110 &&
        p1Y > 450 &&
        p1Y < 550 &&
        gearsLVL2.length === 0
      ) {
        state = "levelThree";
        p1X = 100;
        p1Y = 455;
        gearsLVL2.length === 3;
      }
    }
  } else if (state === "levelThree") {
    for (let i = 0; i < obstaclesLVL3.length; i++) {
      let obstacle = obstaclesLVL3[i];
      if (
        (walkingRight === false &&
          p1X >= obstacle.x &&
          p1X <= obstacle.x + obstacle.width - pWidth / 2 &&
          p1Y + pHeight >= obstacle.y &&
          p1Y + pHeight <= obstacle.y + 55) ||
        (walkingRight === true &&
          p1X >= obstacle.x - pWidth / 2 &&
          p1X <= obstacle.x + obstacle.width &&
          p1Y + pHeight >= obstacle.y &&
          p1Y + pHeight <= obstacle.y + 55)
      ) {
        // Collision detected, end the game
        failScreen();
        isGameActive = false;
      }
    }

    for (let i = 0; i < liquidLVL3.length; i++) {
      let liquid = liquidLVL3[i];
      if (
        (walkingRight === false &&
          p1X >= liquid.x &&
          p1X <= liquid.x + liquid.width - pWidth / 2 &&
          p1Y + pHeight >= liquid.y &&
          p1Y + pHeight <= liquid.y + 55) ||
        (walkingRight === true &&
          p1X >= liquid.x - pWidth / 2 &&
          p1X <= liquid.x + liquid.width &&
          p1Y + pHeight >= liquid.y &&
          p1Y + pHeight <= liquid.y + 55)
      ) {
        // Collision detected, end the game
        failScreen();
        isGameActive = false;
      }
    }
    if (
      p1X > 1020 &&
      p1X < 1110 &&
      p1Y > 450 &&
      p1Y < 550 &&
      gearsLVL3.length === 0
    ) {
      state = "win";
      isGameActive === false;
    }
  }

  keyPressed();
  gravity();
  checkCollision();
}
