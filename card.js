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
    ctx.fillStyle = this.color;
    ctx.fillRect(x, y, cardWidth, cardHeight);
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, cardWidth, cardHeight);
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText(this.number, x + (cardWidth/2), y + (cardHeight/2) + 8);
  }

  // if a color hint is attached to the card
  else if (this.colorHint == true) {
    ctx.fillStyle = this.color;
    ctx.fillRect(x, y, cardWidth, cardHeight);
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, cardWidth, cardHeight);
  }

  // if a number hint is attached to the card
  else if (this.numberHint == true) {
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, cardWidth, cardHeight);
    ctx.strokeStyle = "white";
    ctx.strokeRect(x, y, cardWidth, cardHeight);
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText(this.number, x + (cardWidth/2), y + (cardHeight/2) + 8);
  }
  else {
    ctx.fillStyle = 'black';
    ctx.fillRect(x, y, cardWidth, cardHeight);
    ctx.strokeStyle = "white";
    ctx.strokeRect(x, y, cardWidth, cardHeight);
  }
};
  /*
  else {
    ctx.fillStyle = 'black';
    ctx.strokeStyle = "white";
    ctx.strokeRect(x, y, cardWidth, cardHeight);
  }
  ctx.fillRect(x, y, cardWidth, cardHeight);
  ctx.strokeStyle = "black";
  ctx.strokeRect(x, y, cardWidth, cardHeight);
  ctx.font = "30px Arial";
  ctx.textAlign = "center";
  ctx.fillStyle = "";
  ctx.fillText(this.number, x + (cardWidth/2), y + (cardHeight/2) + 8);
};
*/

// cards can have hints attached to them

    	// Cards can be played
    // Card.prototype.play = function() {

    // };

    	// Cards can be discarded

    	// Cards have a color of either green, blue, yellow, or red

    	// Cards have a number from 1 - 5

    	// Cards can be given hints of color or number

    	// Cards have a front and back
