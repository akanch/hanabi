// create token constructor
function Token(color) {
  this.color = color;
};

// blue token slots
Token.prototype.draw = function(x, y) {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  var radiusBlue = 20;
  var radiusRed = 30;
  if (this.color == '#d50000') {
    ctx.arc(x, y, radiusRed, 0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
  }
  else {
    ctx.arc(x, y, radiusBlue, 0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
  };
};
