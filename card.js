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
  ctx.fillRect(this.x, this.y, 70, 100);
  ctx.font = "30px Arial";
  ctx.textAlign = "center";
  ctx.fillStyle = "black";
  ctx.fillText(this.number, this.x + (70/2), this.y + (100/2));
};

// test for if card is face up or down
var newCard = new Card(100, 100, false, 'red', 2);
newCard.draw();

 
    	// Cards can be played
    // Card.prototype.play = function() {

    // };

    	// Cards can be discarded

    	// Cards have a color of either green, blue, yellow, or red

    	// Cards have a number from 1 - 5

    	// Cards can be given hints of color or number

    	// Cards have a front and back
