//Player class
class Player extends Populate {
  constructor () {
    super();
    this.x = 0;
    this.y = 415;
    this.sprites = [
      "images/char-boy.png",
      "images/char-cat-girl.png",
      "images/char-horn-girl.png",
      "images/char-pink-girl.png",
      "images/char-princess-girl.png"
    ],
    this.round = 0;
    this.wins = [];
    this.sprite = this.sprites[this.round % this.sprites.length];
    this.lives = 5;
  }

//key input for Player
  handleInput (input) {
    if(this.lives > 0) {
      switch (input) {
        case "left":
          if (this.x >= this.sideways) {
            this.x -= this.sideways;
          }
          break;
        case "right":
          if (this.x <= this.sideways * 3) {
            this.x += this.sideways;
          }
          break;
        case "up":
          if (this.y >= 83) {
            this.y -= this.upDown;
          } else if (this.y === 0) {
            //You win!!!
            //Get x and check if the player has already won that space
            if(this.wins.indexOf(this.x) < 0) {
              this.wins.push(this.x);
              this.round++;
              this.sprite = this.sprites[this.round % this.sprites.length];
              this.reset();
            }
          }
          break;
        case "down":
          if (this.y <= this.upDown * 4) {
            this.y += this.upDown;
          }
          break;
      }
    }
  }

  //updates player and sets condition for collision & win
  update () {
    for (let enemy of allEnemies) {
      if (this.y === enemy.y && (enemy.x + enemy.sideways / 2 > this.x && enemy.x < this.x + this.sideways / 2)) {
        this.lives--;
        console.log("Lives left: " + this.lives);
        this.reset();

        if (this.lives === 0) {
          //Show game over screen
          alert("Game over");
        }
      }
    }
  }
}
