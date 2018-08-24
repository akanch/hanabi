// Create a deck constructor
function Deck() {
  this.colors = ['blue', 'green', 'red', 'white', 'yellow'];
  this.numbers = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5];
  this.cards = [];
  for (i = 0; i < this.colors.length; i++) {
    for (j = 0; j < this.numbers.length; j++) {
      this.cards.push(new Card(false, this.colors[i], this.numbers[j]));
    }
  };
};

// Fisher-Yates shuffle function
Deck.prototype.shuffle = function() {
  for (k = 0; k < this.cards.length; k++) {
    var q = Math.floor(Math.random() * (k + 1));
    var tempK = this.cards[k];
    var tempQ = this.cards[q];
    this.cards[k] = tempQ;
    this.cards[q] = tempK;
  };
};

// function to deal cards to each player at the start of the game
Deck.prototype.deal = function(player) {
  for (i = 0; i < 5; i++) {
    player.drawCard(this.cards);
  };
};
