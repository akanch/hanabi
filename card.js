// create Card constructor
function Card(sideUp, color, number) {
  this.sideUp = sideUp;
  this.color = color;
  this.number = number;
};

// draw a card
Card.prototype.draw = function(x, y) {
  if (this.sideUp === true) {
    ctx.fillStyle = this.color;
  }
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
  ctx.fillStyle = "black";
  ctx.fillText(this.number, x + (cardWidth/2), y + (cardHeight/2));
};

    	// Cards can be played
    // Card.prototype.play = function() {

    // };

    	// Cards can be discarded

    	// Cards have a color of either green, blue, yellow, or red

    	// Cards have a number from 1 - 5

    	// Cards can be given hints of color or number

    	// Cards have a front and back
