// creating the board for the game
function draw() {
  ctx.rect(0, 0, windowX, windowY);
  ctx.fillStyle = '#6e777a';
  ctx.fill();

  // slot for the deck
  ctx.rect(deckX, deckY, cardWidth, cardHeight);
  ctx.stroke();

  // slot for each color of discarded cards
  var yDiscard = 275;
  for (i = 0; i < 4; i++) {
    ctx.rect(deckX, yDiscard, cardWidth, cardHeight);
    ctx.stroke();
    yDiscard += cardHeight + 5;
  };

  // shuffled deck created
  var newDeck = new Deck([1, 1, 1, 2, 2, 3, 3, 4, 4, 5]);
  newDeck.shuffle();
  for (i = 0; i < newDeck.cards.length; i++){
    newDeck.cards[i].draw(deckX, deckY);
    deckX += 10;
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

  // discard piles
  blueDiscard = new Discard();
  greenDiscard = new Discard();
  redDiscard = new Discard();
  yellowDiscard = new Discard();

  // test discard piles
  blueDiscard.add(newDeck.cards.pop());
  greenDiscard.add(newDeck.cards.pop());

/*
  if (discarded.color == 'blue') {
    blueDiscard.add(discarded);
  }
  else if (discarded.color == 'green') {
    greenDiscard.add(discarded);
  }
  else if (discarded.color == 'red') {
    redDiscard.add(discarded);
  }
  else {
    yellowDiscard.add(discarded);
  };
  */

  // draw discarded piles
  var discardPiles = [blueDiscard, greenDiscard, redDiscard, yellowDiscard];
  for (i = 0; i < 4; i++) {
    for (j = 0; j < discardPiles[i].length; j++) {
      discardPiles[i][j].draw(deckX, yDiscard);
      deckX += cardWidth + 5;
    };
    yDiscard += cardHeight + 5;
  };


  // red token slots
  xRed = xFirstRow + 30;
  yRed = cardHeight + 80;
  for (i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(xRed, yRed, radiusRed, 0,2*Math.PI);
    ctx.stroke();

    // red token drawing test
    red = new Token('#d50000');
    red.draw(xRed, yRed);
    xRed += 70;
  };
};
