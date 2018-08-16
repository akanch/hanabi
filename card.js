// create Card object
var Card = function(x, y, sideUp, color, number) {
  this.x = x;
  this.y = y;
  this.sideUp = sideUp;
  this.color = color;
  this.number = number;
};

// draw a card
Card.prototype.draw = function() {
  if (this.sideUp === true) {
    ctx.fillStyle = this.color;
  }
  else {
    ctx.fillStyle = 'black';
  }
  ctx.fillRect(this.x, this.y, cardWidth, cardHeight);
  ctx.font = "30px Arial";
  ctx.textAlign = "center";
  ctx.fillStyle = "black";
  ctx.fillText(this.number, this.x + (cardWidth/2), this.y + (cardHeight/2));
};

    	// Cards can be played
    // Card.prototype.play = function() {

    // };

    	// Cards can be discarded

    	// Cards have a color of either green, blue, yellow, or red

    	// Cards have a number from 1 - 5

    	// Cards can be given hints of color or number

    	// Cards have a front and back
