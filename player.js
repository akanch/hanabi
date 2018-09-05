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
  x = this.hand.splice(index, 1);
  return x[0];
};

// draw a card from the deck
Player.prototype.drawCard = function(deck) {
  this.hand.unshift(deck.pop());
};

// receive a hint function
Player.prototype.getHint = function(hint) {
  this.hint.push(hint);
};

// hide player hands
Player.prototype.hideHand = function() {
  for (i = 0; i < this.hand.length; i++) {
    this.hand[i].sideUp = false;
  };
};

// reveal player hands
Player.prototype.revealHand = function() {
  for (i = 0; i < this.hand.length; i++) {
    this.hand[i].sideUp = true;
  };
};
