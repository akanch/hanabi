// creates a new hand slot object that tracks a card and its position
function HandSlot(card, cardX, cardY) {
  this.card = card;
  this.cardX = cardX;
  this.cardY = cardY;
  this.selected = false;
};

// checks if the card has been selected
HandSlot.prototype.ifSelect = function(currentX, currentY) {
  if (currentX < this.cardX + cardWidth && currentX > this.cardX
  && currentY < this.cardY + cardHeight && currentY > this.cardY
  && this.card != null) {
    this.selected = true;
  }
};
