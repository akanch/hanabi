function CardSlot(card, cardX, cardY) {
  this.card = card;
  this.cardX = cardX;
  this.cardY = cardY;
  this.selected = false;
};

CardSlot.prototype.ifSelect(currentX, currentY) {
  if (currentX < this.cardX + cardWidth && currentX > this.cardX
  && currentY < this.cardY + cardHeight && currentY > this.cardY) {
    this.selected = true;
  }
};
