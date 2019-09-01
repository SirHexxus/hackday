//Game State Manager
class Game {
    state = {
        hasBegun: false,
    };

    setModal(modal) {
        this.modal = modal;
    }
//key input for whole game
  handleInput (input) {
    if(input === "enter") {
        if (!this.state.hasBegun) {
            this.modal.close();
            this.state.hasBegun = true;
        }
    }
  }
}