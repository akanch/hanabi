// constructor for played cards
function Played(color) {
  this.pile = []
  this.color = color;
};

Played.prototype.add = function(played) {
  this.pile.push(played);
};
