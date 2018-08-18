// creating the board for the game
function draw() {
  ctx.rect(0, 0, windowX, windowY);
  ctx.fillStyle = '#6e777a';
  ctx.fill();

  // slot for the deck
  ctx.rect(deckX, deckY, cardWidth, cardHeight);
  ctx.stroke();

  // slot for each color of discarded cards
  yDiscard = 275;
  for (i = 0; i < 4; i++) {
    ctx.rect(15, yDiscard, cardWidth, cardHeight);
    ctx.stroke();
    yDiscard += cardHeight + 5;
  };

  // blue token slots
  var xFirstRow = 35;
  var xSecondRow = 35;
  var yFirstRow = cardHeight + 55
  var ySecondRow = yFirstRow + + radiusBlue * 2 + 10;
  for (i = 0; i < 8; i++) {
    if (i < 4) {
      ctx.beginPath();
      ctx.arc(xFirstRow, yFirstRow, radiusBlue, 0,2*Math.PI);
      ctx.stroke();

      // first row blue token drawing test
      blue = new Token('#02a8ff');
      blue.draw(xFirstRow, yFirstRow);
      xFirstRow += 50;
    }
    else{
      ctx.beginPath();
      ctx.arc(xSecondRow, ySecondRow, radiusBlue, 0,2*Math.PI);
      ctx.stroke();

      // second row blue token drawing test
      blue = new Token('#02a8ff');
      blue.draw(xSecondRow, ySecondRow);
      xSecondRow += 50;
    }
  };

  // red token slots
  xRed = xFirstRow + 30;
  yRed = cardHeight + 80;;
  for (i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(xRed, yRed, radiusRed, 0,2*Math.PI);
    ctx.stroke();

    // red token drawing test
    red = new Token('#d50000');
    red.draw(xRed, yRed);
    xRed += 70;
    }
}
