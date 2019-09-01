//Game State Manager

class Game {
  constructor() {
    this.state = [
      "startMenu",
      "round01",
      "round02",
      "round03",
      "round04",
      "round05"
    ]
  }
}


const player = new Player();

//Array to hold Enemy objects
const allEnemies = [];


const enemy1 = new Enemy(101, 83, 150);
const enemy2 = new Enemy(404, 166, 350);
const enemy3 = new Enemy(0, 249, 375);
const enemy4 = new Enemy(0, 83, 100);

allEnemies.push(enemy1, enemy2, enemy3, enemy4);

// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function (e) {
  var allowedKeys = {
    65: "left",
    37: "left",
    
    87: "up",
    38: "up",
      
    68: "right",
    39: "right",
      
    83: "down",
    40: "down",
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
