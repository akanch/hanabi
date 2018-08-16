// Create a deck object
var Deck = function() {
  this.colors = ['blue', 'green', 'red', 'yellow'];
  this.numbers = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5];
  cards = [];
  for (i = 0; i < this.colors.length; i++) {
    for (j = 0; j < this.numbers.length; j++){
      cards.push(new Card(deckX, deckY, true, this.colors[i], this.numbers[j]));
      deckX += 10;
    }
  }
  return cards;
};
