// create discard pile constructor
function Discard() {
  this.pile = [];
};

// function to add a card to the discard pile
Discard.prototype.add = function(discarded) {
  this.pile.push(discarded);
};
