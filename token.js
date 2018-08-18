// create token constructor
function Token(color) {
  this.color = color;
};

// blue token slots
Token.prototype.draw = function(x, y) {
  ctx.beginPath();
  ctx.fillStyle(this.color)
  ctx.arc(x, y, radiusBlue, 0,2*Math.PI);
  ctx.stroke();
};
