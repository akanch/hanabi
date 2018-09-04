// create token constructor
function Token(color) {
  this.color = color;
};

// blue token slots
Token.prototype.draw = function(x, y) {
  ctx.fillStyle = this.color;
  var radiusBlue = 20;
  var radiusRed = 30;
  if (this.color == '#d50000') {
    ctx.beginPath();
    ctx.arc(x, y, radiusRed, 0, 2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
  }
  else {
    ctx.beginPath();
    ctx.arc(x, y, radiusBlue, 0, 2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
  };
};
