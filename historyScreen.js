// creating the canva
function setup() {
  createCanvas(1200, 600);
  background(0, 0, 0);
  // Ok button
  button = createButton("Ok!");
  button.position(1000, 530);
  button.style("color:white");
  button.style("background-color:black");
  button.style("border", "none");
  button.size(30, 30);

  button.style("font-size", "45px");

  // link it to the start screen page. button.mousePressed(startScreen);
}

function historyScreen() {
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
    450,
    120,
    600,
    600
  );
}

function draw() {
  historyScreen();
}
