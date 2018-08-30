// hint slot constructor that tracks which hint was selected and it's position
function HintSlot(hint, hintX, hintY) {
  this.hint = hint;
  this.hintX = hintX;
  this.hintY = hintY;
  this.selected = false;
};

// checks if the hint has been selected
HintSlot.prototype.ifSelect = function(currentX, currentY) {
  if (currentX < this.hintX + 60 && currentX > this.hintX
  && currentY < this.hintY + 60 && currentY > this.hintY
  && this.selected == false) {
    this.selected = true;
  }
  else if (currentX < this.hintX + 60 && currentX > this.hintX
  && currentY < this.hintY + 60 && currentY > this.hintY
  && this.selected == true) {
    this.selected = false;
  }
};
