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
			ctx.closePath();
	    xFirstRow += 50;
	  }
	  else {
	    ctx.beginPath();
	    ctx.arc(xSecondRow, ySecondRow, radiusBlue, 0,2*Math.PI);
	    ctx.stroke();
			ctx.closePath();
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
		ctx.closePath();
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
		ctx.beginPath();
	  ctx.rect(deckX, yCorrect, cardWidth, cardHeight);
	  ctx.stroke();
		ctx.closePath();
	  deckX += cardWidth + 5;
	};
};

// function to draw correct pile of cards
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
		ctx.beginPath();
	  ctx.rect(deckX, yDiscard, cardWidth, cardHeight);
	  ctx.stroke();
		ctx.closePath();
	  yDiscard += cardHeight + 5;
	};
};

// function that takes in a list of discarded cards and draws them
function drawDiscardPiles(discardPiles) {
	var yDiscard = 240 + cardHeight;
	for (i = 0; i < discardPiles.length; i++) {
		var deckX = 15;
		for (j = 0; j < discardPiles[i].pile.length; j++) {
			discardPiles[i].pile[j].sideUp = true;
			discardPiles[i].pile[j].draw(deckX, yDiscard);
			deckX += cardWidth + 5;
		}
		yDiscard += cardHeight + 5;
	};
};

// function that draws the slots and the hands of the each player
function drawPlayerHands(playerList, handSlots) {
	var y = 50;
	if (handSlots.length == 0) {
		for (i = 0; i < playerList.length; i++) {
			var x = windowX - cardWidth * 6;
			for (j = 0; j < playerList[i].hand.length; j++) {
				handSlots.push(new HandSlot(playerList[i].hand[j], x, y));
				playerList[i].hand[j].draw(x, y);
				x += cardWidth + 1;
				}
			y += cardHeight + 60;
		}
	}
	else if (handSlots.length != 0) {
		y = 50;
		for (i = 0; i < playerList.length; i++) {
			var x = windowX - cardWidth * 6;
			for (j = 0; j < playerList[i].hand.length; j++) {
				playerList[i].hand[j].draw(x, y);
				x += cardWidth + 1;
			}
			y += cardHeight + 60;
		}
	}
	drawSelectedCard(handSlots);
};

// function that outlines the selected card
function drawSelectedCard(handSlots) {
	for (i = 0; i < handSlots.length; i++) {
		if (handSlots[i].selected == true) {
			ctx.beginPath();
			ctx.strokeStyle = '#e07ac3';
			ctx.lineWidth = 5;
			ctx.strokeRect(handSlots[i].cardX, handSlots[i].cardY, cardWidth, cardHeight);
			ctx.closePath();
		}
	};
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'black';
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
function drawHintBoard(hintSlots) {
	var xFirstRow = 475;
	var yFirstRow = 60;
	var xSecondRow = 475;
	var ySecondRow = 120;
	var colors = ['blue', 'green', 'red', 'white', 'yellow'];
	var width = 60;
	if (hintSlots.length == 0) {
		for (i = 0; i < 10; i++) {
		  if (i < 5) {
		    ctx.beginPath();
				ctx.rect(xFirstRow, yFirstRow, width, width);
				ctx.stroke();
				ctx.closePath();
				ctx.font = "30px Arial";
				ctx.textAlign = "center";
				ctx.fillStyle = 'black';
				hintSlots.push(new HintSlot(i + 1, xFirstRow, yFirstRow));
				xFirstRow += width;
		  }
		  else {
		    ctx.beginPath();
				ctx.fillStyle = colors[i - 5];
				ctx.fillRect(xSecondRow, ySecondRow, width, width);
				ctx.strokeRect(xSecondRow, ySecondRow, width, width);
				ctx.closePath();
				hintSlots.push(new HintSlot(colors[i - 5], xSecondRow, ySecondRow));
		    xSecondRow += width;
		  };
		};
	}
	else if (hintSlots.length != 0) {
		for (i = 0; i < 10; i++) {
		  if (i < 5) {
		    ctx.beginPath();
				ctx.rect(xFirstRow, yFirstRow, width, width);
				ctx.stroke();
				ctx.closePath();
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
				ctx.closePath();
		    xSecondRow += width;
		  };
		};
	};
	drawSelectedHint(hintSlots);
};



// function that labels the selected hint
function drawSelectedHint(hintSlots) {
	for (i = 0; i < hintSlots.length; i++) {
		if (hintSlots[i].selected == true) {
			ctx.beginPath();
			ctx.strokeStyle = '#e07ac3';
			ctx.lineWidth = 5;
			ctx.strokeRect(hintSlots[i].hintX, hintSlots[i].hintY, 60, 60);
			ctx.closePath();
		}
	};
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'black';
};

// draws the regions to play or discard a card
function drawRegions(ownCard) {
	if (ownCard == true) {
		var x = 5;
		var playY = 210;
		var discardY = 210 + cardHeight + 20;
		ctx.fillStyle = 'rgba(0,246,0,0.2';
		ctx.fillRect(x, playY, 700, cardHeight + 20);
		ctx.fillStyle = 'rgba(255,20,0,0.2';
		ctx.fillRect(x, discardY, 700, cardHeight * 5 + 40);
	}
};

// function for drawing the board with current configuration
function drawBoard(config) {
	ctx.beginPath();
	ctx.rect(0, 0, windowX, windowY);
	ctx.fillStyle = '#6e777a';
	ctx.fill();
	ctx.closePath();
	drawBlueSlots();
	drawRedSlots();
	drawBlueTokens(config.numBlueTokens);
	drawRedTokens(config.numWrongGuesses);
	drawCorrectSlots();
	drawCorrectPiles(config.correctGuesses);
	drawDiscardSlots();
	drawDiscardPiles(config.discardPiles);
	drawDeck(config.currentDeck);
	labelHands(config.playerList);
	drawPlayerHands(config.playerList, config.handSlots);
	drawHintBoard(config.hintSlots);
	drawRegions(config.action.ownCard);
};


// draw slots that track position of cards and hints, it takes a card ofject, and clicked x and y pos
// find better name for updating config.x and config.y
