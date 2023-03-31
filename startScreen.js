// creating the canva
function setup() {
  createCanvas(1200, 600);
  background(0, 0, 0);
  // start button
  button = createButton("START PLAYING");
  button.position(530, 320);
  button.style("color:red");
  button.style("background-color:black");
  button.style("border", "none");
  button.size(250, 110);

  button.style("font-size", "45px");

  // link it to the lavelOne page. button.mousePressed(levelOne);
}

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

function draw() {
  startScreen();
}
