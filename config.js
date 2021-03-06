// function to storing the current configuration of the game
function Config(currentDeck, numBlueTokens, currentPlayer, playerList, playedPiles, discardPiles, correctGuesses, numWrongGuesses, handSlots, hintSlots, gameOn) { //config should be in its own file {
	this.currentDeck = currentDeck;
	this.numBlueTokens = numBlueTokens;
  this.currentPlayer = currentPlayer;
  this.playerList = playerList;
	this.playedPiles = playedPiles;
  this.discardPiles = discardPiles;
  this.correctGuesses = correctGuesses;
  this.numWrongGuesses = numWrongGuesses;
	this.handSlots = handSlots;
	this.hintSlots = hintSlots;
	this.gameOn = gameOn;
	this.x = 0;
	this.y = 0;
	this.handIndex = null;
	this.hintIndex = null;
	this.otherHandsIdx = null;
	this.action = new Action;
};
