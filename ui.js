// function that takes in the deck object and draws the deck
function drawDeck(deck) {
	var deckX = 15;
	var deckY = 15;
	for (i = 0; i < deck.cards.length; i++) {
    deck.cards[i].draw(deckX, deckY);
    deckX += 9;
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
function drawRedTokens(numWrongGuesses) {
	var radiusRed = 30;
	var xRed = 275;
	var yRed = cardHeight + 70;
	for (i = 0; i < numWrongGuesses; i++) {
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

function drawCorrectPiles(correctGuesses) {
	var yCorrect = 220;
	var blueX = 15;
	var greenX = blueX + cardWidth + 5;
	var redX = greenX + cardWidth + 5;
	var whiteX = redX + cardWidth + 5;
	var yellowX = whiteX + cardWidth + 5;
	for (i = 0; i < correctGuesses.length; i++) {
		correctGuesses[i].sideUp = true;
		if (correctGuesses[i].color == "blue") {
			correctGuesses[i].draw(blueX, yCorrect);
		}
		else if (correctGuesses[i].color == "green") {
			correctGuesses[i].draw(greenX, yCorrect);
		}
		else if (correctGuesses[i].color == "red") {
			correctGuesses[i].draw(redX, yCorrect);
		}
		else if (correctGuesses[i].color == "white") {
			correctGuesses[i].draw(whiteX, yCorrect);
		}
		else {
			correctGuesses[i].draw(yellowX, yCorrect);
		}
	}
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
	var yDiscard = 240 + cardHeight;
	for (i = 0; i < discardPiles.length; i++) {
		var deckX = 15;
		//ctx.font = "30px Arial";
		//ctx.fillText(discardPiles[i],deckX, yDiscard);
		for (j = 0; j < discardPiles[i].pile.length; j++) {
			discardPiles[i].pile[j].sideUp = true;
			discardPiles[i].pile[j].draw(deckX, yDiscard);
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
			x += cardWidth + 1;
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
		ctx.textAlign = "center";
		ctx.fillStyle = 'black'
		ctx.fillText(playerList[i].name, x, y);
		y += 150;
	};
};

// draw hint board
function drawHintBoard() {
	var xFirstRow = 475;
	var yFirstRow = 60;
	var xSecondRow = 475;
	var ySecondRow = 120;
	var colors = ['blue', 'green', 'red', 'white', 'yellow'];
	var width = 60;
	for (i = 0; i < 10; i++) {
	  if (i < 5) {
	    ctx.beginPath();
			ctx.rect(xFirstRow, yFirstRow, width, width);
			ctx.stroke();
			ctx.font = "30px Arial";
			ctx.textAlign = "center";
			ctx.fillStyle = 'black'
			ctx.fillText(i + 1, xFirstRow + width / 2, yFirstRow + width / 2 + 10);
			xFirstRow += width;
	  }
	  else {
	    ctx.beginPath();
			ctx.fillStyle = colors[i - 5];
			ctx.fillRect(xSecondRow, ySecondRow, width, width);
			ctx.strokeRect(xSecondRow, ySecondRow, width, width);
	    xSecondRow += width;
	  };
	};
};

function labelSelectedCard(card) {

	//var x = coordinates.top;
	//var y = coordinates.left;
	//card.draw(x, y + 10);
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
	drawCorrectPiles(config.correctGuesses);
	drawDiscardSlots();
	drawDiscardPiles(config.discardPiles);
	drawDeck(config.currentDeck);
	drawPlayerHands(config.playerList);
	drawHintBoard();
	labelHands(config.playerList);
	labelSelectedCard(config.currentPlayer.hand[0]);
};


// draw slots that track position of cards and hints, it takes a card ofject, and clicked x and y pos
// find better name for updating config.x and config.y
