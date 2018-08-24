// function that takes in the deck object and draws the deck
function drawDeck(deck) {
	var deckX = 15;
	var deckY = 15;
	for (i = 0; i < deck.cards.length; i++) {
    deck.cards[i].draw(deckX, deckY);
    deckX += 10;
	};
};

// function for drawing blue token slots
function drawBlueSlots() {
	// blue token slots
	var xFirstRow = 35;
	var xSecondRow = 35;
	var radiusBlue = 20;
	var yFirstRow = cardHeight + 50;
	var ySecondRow = yFirstRow + radiusBlue * 2 + 5;
	for (i = 0; i < 8; i++) {
	  if (i < 4) {
	    ctx.beginPath();
	    ctx.arc(xFirstRow, yFirstRow, radiusBlue, 0,2*Math.PI);
	    ctx.stroke();
	    xFirstRow += 50;
	  }
	  else {
	    ctx.beginPath();
	    ctx.arc(xSecondRow, ySecondRow, radiusBlue, 0,2*Math.PI);
	    ctx.stroke();
	    xSecondRow += 50;
	  };
	};
};

// function for drawing red token slots
function drawRedSlots() {
	var radiusRed = 30;
  var xRed = 275;
  var yRed = cardHeight + 70;
  for (i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(xRed, yRed, radiusRed, 0,2*Math.PI);
    ctx.stroke();
    xRed += 70;
	};
};

// function takes in number of blue tokens to draw and draws them
function drawBlueTokens(num) {
	var xFirstRow = 35;
	var xSecondRow = 35;
	var radiusBlue = 20;
	var yFirstRow = cardHeight + 50;
	var ySecondRow = yFirstRow + radiusBlue * 2 + 5;
	for (i = 0; i < num; i++) {
		if (i < 4) {
			blue = new Token('#02a8ff');
	    blue.draw(xFirstRow, yFirstRow);
	    xFirstRow += 50;
		}
		else {
			blue = new Token('#02a8ff');
			blue.draw(xSecondRow, ySecondRow);
			xSecondRow += 50;
		};
	};
};

// function that takes in the number of wrong guess and draws red tokens
function drawRedTokens(wrongGuesses) {
	var radiusRed = 30;
	var xRed = 275;
	var yRed = cardHeight + 80;
	for (i = 0; i < wrongGuesses.length; i++) {
		red = new Token('#d50000');
		red.draw(xRed, yRed);
		xRed += 70;
	};
};

// function to draw correctly played piles
function drawCorrectSlots() {
	var deckX = 15;
	var yCorrect = 220;
	for (i = 0; i < 5; i++) {
	  ctx.rect(deckX, yCorrect, cardWidth, cardHeight);
	  ctx.stroke();
	  deckX += cardWidth + 5;
	};
};

// function that draws the discard slots
function drawDiscardSlots(discarded) {
	var deckX = 15;
	var yDiscard = 240 + cardHeight;
	for (i = 0; i < 5; i++) {
	  ctx.rect(deckX, yDiscard, cardWidth, cardHeight);
	  ctx.stroke();
	  yDiscard += cardHeight + 5;
	};
};

// function that takes in a list of discarded cards and draws them
function drawDiscardPiles(discardPiles) {
	var deckX = 15;
	var yDiscard = 275;
	for (i = 0; i < discardPiles.length; i++) {
		for (j = 0; j < discardPiles[i].length; j++) {
			discardPiles[i][j].draw(deckX, yDiscard);
			deckX += cardWidth + 5;
		}
		yDiscard += cardHeight + 5;
	};
};

// function that draws the slots and the hands of the each player
function drawPlayerHands(playerList) {
	var y = 50;
	for (i = 0; i < playerList.length; i++) {
		var x = windowX - cardWidth * 6;
		for (j = 0; j < playerList[i].hand.length; j++) {
			playerList[i].hand[j].draw(x, y);
			x += cardWidth + 2;
		}
		y += cardHeight + 60;
	};
};

// function that labels each player's hands with their name
function labelHands(playerList) {
	// finding the width of the longest player name
	var longestName = "";
	for (i = 0; i < playerList.length; i++) {
		if (playerList[i].name.length > longestName.length) {
			longestName = playerList[i].name;
		};
	};
	ctx.font = "20px Arial";
	nameWidth = ctx.measureText(longestName).width;
	var y = 100;
  var x = 1050 - nameWidth;
	for (var i = 0; i < playerList.length; i++) {
		ctx.font = "20px Arial";
		ctx.fillStyle = 'black'
		ctx.fillText(playerList[i].name,x,y);
		y += 150;
	};
};

// function for drawing the board with current configuration
function drawBoard(config) {
	ctx.rect(0, 0, windowX, windowY);
	ctx.fillStyle = '#6e777a';
	ctx.fill();
	drawBlueSlots();
	drawRedSlots();
	drawBlueTokens(config.numBlueTokens);
	drawRedTokens(config.wrongGuesses);
	drawCorrectSlots();
	drawDiscardSlots();
	drawDiscardPiles(config.discardPiles);
	drawDeck(config.currentDeck);
	drawPlayerHands(config.playerList);
	labelHands(config.playerList);
};
