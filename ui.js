// function that takes in the deck object and draws the deck
function drawDeck(deck) {
	var deckX = 15;
	var deckY = 15;
	for (i = 0; i < deck.cards.length; i++){
    deck.cards[i].draw(deckX, deckY);
    deckX += 10;
};

// function for drawing blue token slots
function drawBlueSlots() {
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
	    xFirstRow += 50;
	  }
	  else{
	    ctx.beginPath();
	    ctx.arc(xSecondRow, ySecondRow, radiusBlue, 0,2*Math.PI);
	    ctx.stroke();
	    xSecondRow += 50;
	  }
;}

// function for drawing red token slots
function drawRedSlots() {
	var radiusRed = 30;
  var xRed = xFirstRow + 30;
  var yRed = cardHeight + 80;
  for (i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(xRed, yRed, radiusRed, 0,2*Math.PI);
    ctx.stroke();
    xRed += 70;
};

// function takes in number of blue tokens to draw and draws them
function drawBlueTokens(num) {
	var xFirstRow = 35;
	var xSecondRow = 35;
	var yFirstRow = cardHeight + 55;
	var ySecondRow = yFirstRow + + radiusBlue * 2 + 10;
		for (i = num.length - 1; i < 0; i--){
			if (i < 4){
				blue = new Token('#02a8ff');
		    blue.draw(xFirstRow, yFirstRow);
		    xFirstRow += 50;
			};
			else {
				blue = new Token('#02a8ff');
				blue.draw(xSecondRow, ySecondRow);
				xSecondRow += 50;
			}
		}
};

// function that takes in the number of wrong guess and draws red tokens
function drawRedTokens(wrongGuesses) {
	var radiusRed = 30;
	var xRed = xFirstRow + 30;
	var yRed = cardHeight + 80;
	for (i = 0; i < wongGuesses.length; i++) {
		red = new Token('#d50000');
		red.draw(xRed, yRed);
		xRed += 70;
};

// function to draw correctly played piles
function drawCorrectSlots(correct) {
	var deckX = 15;
	var yCorrect = 275;
	for (i = 0; i < 5; i++) {
	  ctx.rect(deckX, yDiscard, cardWidth, cardHeight);
	  ctx.stroke();
	  deckX += cardWidth + 5;
	};
};

// function that draws the discard slots
function drawDiscardSlots(discarded) {
	var deckX = 15;
	var yDiscard = 275;
	for (i = 0; i < 5; i++) {
	  ctx.rect(deckX, yDiscard, cardWidth, cardHeight);
	  ctx.stroke();
	  yDiscard += cardHeight + 5;
	};
};

// function that takes in a list of discarded cards and draws them
function drawDiscards(discards) {

};

// function for drawing the board with current configuration
function drawBoard(config, playerList) {
	draw token slots(config.hintsgiven)
	draw tokens (blue)
	draw test for red(config.wrongguesses)
};

runGame.js(empty config) //game just started
