let isGameActive = true;
let state = "start";

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

//////////////SCREENS ONE SETUP////////////////

/////////OBSTACLES//////////

function obstaclesOne(x, y) {
  push();
  fill(225, 193, 110);
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

/////////LIQUID//////////

function liquidOne(x, y) {
  // liquid
  fill(255, random(140, 150), 0);
  push();
  noStroke();
  drawingContext.shadowBlur = 5;
  drawingContext.shadowColor = "red";
  rect(x + 600, y + 285, 170, 30);
  rect(x + 180, y + 555, 200, 30);
  rect(x + 750, y + 555, 230, 30);
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

function liquidThree(x, y) {
  // liquid

  push();
  fill(255, random(190, 215), 0);
  noStroke();
  drawingContext.shadowBlur = 5;
  drawingContext.shadowColor = "orange";
  rect(x + 790, y + 175, 200, 30);
  rect(x + 450, y + 385, 200, 30);
  rect(x + 100, y + 555, 1000, 30);

  pop();
}

/////////BORDERS//////////

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

/////////MAPS//////////

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
  vertex(x + 530, y + 380);
  vertex(x + 530, y + 350);
  vertex(x + 600, y + 350);
  vertex(x + 600, y + 450);
  vertex(x + 730, y + 450);
  vertex(x + 730, y + 500);
  vertex(x + 770, y + 500);
  vertex(x + 770, y + 600);
  vertex(x + 220, y + 600);
  endShape();

  //map
  rect(x + 835, y + 520, 90, 20, 1);
  pop();

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

/////////DOORS//////////

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

//////////////LEVEL FUNCTIONS (SCREENS)////////////////

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

function levelOne() {
  background(255, 252, 186);
  liquidOne(0, 0);
  mapOne(0, 0);
  borderOne(0, 0);
  obstaclesOne(0, 0);
  doorOne(0, 0);
  startButton.hide();
}

function levelTwo() {
  background(178, 194, 131);
  liquidTwo(0, 0);
  mapTwo(0, 0);
  borderTwo(0, 0);
  obstaclesTwo(0, 0);
  doorTwo(0, 0);
  startButton.hide();
}

function levelThree() {
  push();
  noStroke();
  background(0, 0, 0);
  liquidThree(0, 0);
  pop();
  mapThree(0, 0);
  borderThree(0, 0);
  obstaclesThree(0, 0);
  doorThree(0, 0);
  startButton.hide();
}

function winScreen() {
  // text: YOU WON!
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
  winButton.show();
  startButton.hide();
}

function failScreen() {
  // text: GAME OVER
  fill(255, 255, 255);
  textSize(90);
  // textFont(Copperplate);
  textAlign(CENTER, TOP);
  text("GAME OVER...", 620, 100);
  failButton.show();
  winButton.hide();
  startButton.hide();
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
}
