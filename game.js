function Game() {
// creating the board for the game
ctx.rect(0, 0, windowX, windowY);
ctx.fillStyle = '#6e777a';
ctx.fill();

// slot for the deck
ctx.rect(deckX, deckY, cardWidth, cardHeight);
ctx.stroke();

// slot for each color of discarded cards
var deckX = 15;
var yDiscard = 275;
for (i = 0; i < 4; i++) {
  ctx.rect(deckX, yDiscard, cardWidth, cardHeight);
  ctx.stroke();
  yDiscard += cardHeight + 5;
};

// blue token slots
var xFirstRow = 35;
var xSecondRow = 35;
var radiusBlue = 20;
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
  // shuffled deck created (there is on still in main)
  var newDeck = new Deck([1, 1, 1, 2, 2, 3, 3, 4, 4, 5]);
  deckX = 15;
  var deckY = 15;
  newDeck.shuffle();
  for (i = 0; i < newDeck.cards.length; i++){
    newDeck.cards[i].draw(deckX, deckY);
    deckX += 10;
  };

  // create player object


  //
};
