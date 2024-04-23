let gameState = "start";  // New variable to manage game state

function setup() {
  noCanvas(); // Initially, do not create a canvas
}

function startGame() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('main');  // Make the canvas a child of the main element
  // Existing setup code here...
  tw = width / howmany;
  th = height / howmany;
  hitbox = th * (howmany - 2)

  for (let i = 0; i < howmany; ++i) {
    tiles[i] = new Tile(i, tw * i, tw, th);
  }
  gameState = "playing";
}

document.getElementById('startButton').addEventListener('click', function () {
  window.location.href = 'game.html'; // Redirect to the new HTML file
});


function draw() {
  if (gameState === "playing") {
    background(0);
    for (let i = 0; i < tiles.length; ++i) {
      tiles[i].move();
      tiles[i].display();
    }
    noStroke();
    fill(255, 255, 255, 128);
    rect(0, hitbox, width, th);
  }
}
