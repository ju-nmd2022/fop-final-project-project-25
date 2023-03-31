// creating the canva
function setup() {
    createCanvas(1200, 600);
    background(0, 0, 0);
    // try again button
    button = createButton("TRY AGAIN");
    button.position(530, 470);
    button.style("color:white");
    button.style("background-color:black");
    button.style("border", "none");
    button.size(200, 30);
  
    button.style("font-size", "30px");
  
    // link it to the lavelOne page. button.mousePressed(levelOne);
  }
  
  function gameOverScreen() {
    // text: GAME OVER
    fill(255, 255, 255);
    textSize(90);
    // textFont(Copperplate);
    textAlign(CENTER, TOP);
    text("GAME OVER...", 620, 100);
  }
  
  function draw() {
    gameOverScreen();
  }