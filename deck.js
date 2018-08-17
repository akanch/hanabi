// Create a deck object
var Deck = function(numbers) {
  this.colors = ['blue', 'green', 'red', 'yellow'];
  this.numbers = numbers;
  cards = [];
  for (i = 0; i < this.colors.length; i++) {
    for (j = 0; j < this.numbers.length; j++){
      cards.push(new Card(deckX, deckY, false, this.colors[i], this.numbers[j]));
      deckX += 10;
    }
  }
  return cards;
};


// Fisher-Yates shuffle function

Deck.prototype.shuffle = function() {
  for (k = this.length - 1; k > 0; k--) {
    var q = Math.floor(Math.random() * (k + 1));
    var temp = this[k];
    this[k] = this[q];
    this[q] = temp;
  };
  //return this;
  return this;
};
