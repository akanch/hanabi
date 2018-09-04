// create player constructor
function Player(name) {
  this.name = name;
  this.hand = [];
  this.hint = [];
  this.turn = false;
};

// release card function for discarding and playing cards
// RELEASE FUNCTION SHOULD WORK ON SELECTED CARD, NOT .POP
Player.prototype.release = function(index) {
  return this.hand.splice(index, 1);
};

// draw a card from the deck
Player.prototype.drawCard = function(deck) {
  this.hand.push(deck.pop());
};

// receive a hint function
Player.prototype.getHint = function(hint) {
  this.hint.push(hint);
};

Player.prototype.revealHand = function() {
  for (i = 0; i < this.hand.length; i++) {
    this.hand[i].sideUp = true;
  };
};
