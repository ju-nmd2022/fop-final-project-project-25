// creating the canva
function setup() {
    createCanvas(1200, 600);
    background(0, 0, 0);
    // play again button
    button = createButton("PLAY AGAIN");
    button.position(530, 470);
    button.style("color:white");
    button.style("background-color:black");
    button.style("border", "none");
    button.size(200, 30);
  
    button.style("font-size", "30px");
  
    // link it to the lavelOne page. button.mousePressed(levelOne);
  }
  
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
  
  function draw() {
    winScreen();
  }
  