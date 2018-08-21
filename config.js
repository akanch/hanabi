// function to storing the current configuration of the game
function config(currentDeck, numBlueTokens, numRedTokens, currentPlayer, numPlayers, discards, correctGuesses, wrongGuesses) { //config should be in its own file {
	this.currentDeck = currentDeck;
	this.numBlueTokens = numBlueTokens;
	this.numRedTokens = numRedTokens;
  this.currentPlayer = currentPlayer;
  this.numPlayers = numPlayers;
  this.discards = discards;
  this.correctGuesses = correctGuesses;
  this.wrongGuesses = wrongGuesses;
};
