// create player constructor
function Player(hand, hint) {
  this.hand = [];
  this.hint = [];
};

// release card function for discarding and playing cards
Player.prototype.release = function() {
  released = this.hand.pop();
  // move discard to discard slots
  return released;
};

// draw a card from the deck
Player.prototype.drawCard = function(deck) {
  this.hand.push(deck.pop());
};

// receive a hint function
Player.prototype.getHint = function(hint){
  this.hint.push(hint);
};
