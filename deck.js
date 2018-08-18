// Create a deck obj
function Deck(numbers) {
  this.colors = ['blue', 'green', 'red', 'yellow'];
  this.numbers = numbers;
  this.cards = [];
  for (i = 0; i < this.colors.length; i++) {
    for (j = 0; j < this.numbers.length; j++){
      this.cards.push(new Card(true, this.colors[i], this.numbers[j]));
    }
  }
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

//k = this.cards.length - 1; k > 0; k--
