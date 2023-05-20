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

function instructionsScreen() {
  // text: instructions title
  fill(255, 255, 255);
  textFont("Arial Narrow");
  textSize(60);
  // textFont(Copperplate);
  textAlign(CENTER, TOP);
  text("INSTRUCTIONS", 590, 30);
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
    textFont("Arial");
    text(instructionsList[i], x, y, 600, 600); // Draw the list item with the bullet point
    y += textLeading(); // Increment the y position by the line spacing
  }
}

function draw() {
  instructionsScreen();
}
