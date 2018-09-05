// constructor for played cards
function Played(color) {
  this.pile = []
  this.color = color;
};

// add a card to the played pile
Played.prototype.add = function(played) {
  this.pile.push(played);
};
