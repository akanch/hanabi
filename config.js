// function to storing the current configuration of the game
function config(currentDeck, numBlueTokens, currentPlayer, numPlayer, discards, correctGuesses, wrongGuesses) { //config should be in its own file {
	this.currentDeck = currentDeck;
	this.numBlueTokens = numBlueTokens;
  this.currentPlayer = currentPlayer;
  this.numPlayer = numPlayer;
  this.discards = discards;
  this.correctGuesses = correctGuesses;
  this.wrongGuesses = wrongGuesses;
};
