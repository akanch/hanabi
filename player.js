// create player constructor
function Player(hand, hint) {
  this.hand = [];
  this.hint = [];
  }
//discard card function, a draw card function, give hint function, play card function, take a hint
};

// discard card function
Player.prototype.discard = function() {
  discarded = this.hand.pop();
  // move discard to discard slots
  return discarded;
};
