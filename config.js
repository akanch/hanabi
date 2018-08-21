// function to storing the current configuration of the game
function config(currentDeck, numBlueTokens, currentPlayer, playerList, discards, correctGuesses, wrongGuesses) { //config should be in its own file {
	this.currentDeck = currentDeck;
	this.numBlueTokens = numBlueTokens;
  this.currentPlayer = currentPlayer;
  this.playerList = playerList;
  this.discards = discards;
  this.correctGuesses = correctGuesses;
  this.wrongGuesses = wrongGuesses;
};

// Questions for Chav:
// - where to put all the draw stuff so that it gets updated
// - should the drawboard only draw the empty board? if so,
// how does it capture the current configuration?
// - if that's all the runGame function is, where does all of code
// for updating the board go?
