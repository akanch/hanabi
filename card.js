// create Card constructor
function Card(sideUp, color, number) {
  this.sideUp = sideUp;
  this.color = color;
  this.number = number;
  this.colorHint = false;
  this.numberHint = false;
};

// draw a card
Card.prototype.draw = function(x, y) {
  if ((this.colorHint == true && this.numberHint == true) || this.sideUp == true) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(x, y, cardWidth, cardHeight);
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, cardWidth, cardHeight);
    ctx.closePath();
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText(this.number, x + (cardWidth/2), y + (cardHeight/2) + 8);
  }

  // if a color hint is attached to the card
  else if (this.colorHint == true) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(x, y, cardWidth, cardHeight);
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, cardWidth, cardHeight);
    ctx.closePath();
  }

  // if a number hint is attached to the card
  else if (this.numberHint == true) {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, cardWidth, cardHeight);
    ctx.strokeStyle = "white";
    ctx.strokeRect(x, y, cardWidth, cardHeight);
    ctx.closePath();
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText(this.number, x + (cardWidth/2), y + (cardHeight/2) + 8);
  }
  else {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(x, y, cardWidth, cardHeight);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, cardWidth, cardHeight);
    ctx.closePath();
  }
};
