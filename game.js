module.exports = class Element {
  // Function that choose computer element randomly
  pickCom() {
    let elements = ["Fire", "Water", "Electric", "Grass", "Ice"];
    this.nCom = elements[Math.floor(Math.random() * elements.length)];
  }

  /**
   * Print a message to message container
   * @param {string} uInput - Data from client aka user input
   */

  check(uInput) {
    this.pickCom();
    let sReturn = "";
    let wType = "";
    let winArray = [];
    // Checking for draw
    if (uInput == this.nCom) {
      sReturn = "Draw";
    } else {
      // if not draw then defining win array according to user element
      if (uInput == "Fire") {
        winArray = ["Water", "Ice"];
      } else if (this.nCom == "Water") {
        winArray = ["Grass", "Ice", "Fire"];
      } else if (this.nCom == "Electric") {
        winArray = ["Water", "Grass", "Ice"];
      } else if (this.nCom == "Grass") {
        winArray = ["Fire", "Ice", "Water"];
      } else {
        winArray = ["Electric", "Fire", "Water"];
      }

      // If computer in win array => Computer wins else user win
      if (winArray.includes(this.nCom)) {
        sReturn = "Computer";
        wType = this.nCom;
      } else {
        sReturn = "You";
        wType = uInput;
      }
    }
    return [sReturn, wType];
  }
};
