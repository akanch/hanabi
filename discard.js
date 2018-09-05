// create discard pile constructor
function Discard(color) {
  this.pile = [];
  this.color = color;
};

// function to add a card to the discard pile
Discard.prototype.add = function(discarded) {
  this.pile.push(discarded);
};
