// create player constructor
function Player(hand, deck) {
  this.hand = [];
  for (i = 0; i < 5; i++) {
    this.hand.push(deck.cards.pop());
  }
//discard card function, a draw card function, give hint function, play card function
};

// discard card function
Player.prototype.discard = function() {
  discarded = this.hand.pop();
  // move discard to discard slots
  return discarded;
};
