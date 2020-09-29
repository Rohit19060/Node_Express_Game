module.exports = class Element {
  pickCom() {
    let elements = ["Fire", "Water", "Electric", "Grass", "Ice"];
    this.nCom = elements[Math.floor(Math.random() * elements.length)];
  }
  check(uInput) {
    this.pickCom();
    let sReturn = "";
    let wType = "";
    let winArray = [];
    if (uInput == this.nCom) {
      sReturn = "Draw";
    } else {
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
