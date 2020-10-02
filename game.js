module.exports = class Element {
  // Function that choose computer element randomly
  pickCom() {
    const elements = [`Fire`, `Water`, `Electric`, `Grass`, `Ice`];
    this.nCom = elements[Math.floor(Math.random() * elements.length)];
  }

  /**
   * Print a message to message container
   * @param {string} uInput - Data from client aka user input
   */

  check(uInput) {
    this.pickCom();
    let sReturn = ``;
    let wType = ``;
    let winArray = [];
    // Checking for draw
    if (uInput == this.nCom) {
      sReturn = `Draw`;
    } else {
      // if not draw then defining win array according to user element
      switch (uInput) {
        case `Fire`:
          winArray = [`Water`, `Ice`];
          break;
        case `Water`:
          winArray = [`Ice`, `Fire`];
          break;
        case `Electric`:
          winArray = [`Water`, `Ice`];
          break;
        case `Grass`:
          winArray = [`Fire`, `Electric`];
          break;
        default:
          winArray = [`Electric`, `Fire`];
          break;
      }

      // If computer in win array => Computer wins else if not then user wins
      for (let i = 0; i < winArray.length; i++) {
        // console.count();
        if (this.nCom == winArray[i]) {
          sReturn = `Computer`;
          wType = this.nCom;
          return [sReturn, wType];
        }
      }
      sReturn = `You`;
      wType = uInput;
    }
    return [sReturn, wType];
  }
};
