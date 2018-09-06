function Main() {
  var deck = new Deck();
  deck.shuffle();
  var playerList = [];

  // discard piles
  var blueDiscard = new Discard('blue');
  var greenDiscard = new Discard('green');
  var redDiscard = new Discard('red');
  var whiteDiscard = new Discard('white');
  var yellowDiscard = new Discard('yellow');
  var discardPiles = [blueDiscard, greenDiscard, redDiscard, whiteDiscard, yellowDiscard];
  var bluePlayed = new Played('blue');
  var greenPlayed = new Played('green');
  var redPlayed = new Played('red');
  var whitePlayed = new Played('white');
  var yellowPlayed = new Played('yellow');
  var playedPiles = [bluePlayed, greenPlayed, redPlayed, whitePlayed, yellowPlayed];
  var playerOne = new Player("Sophmonster");
  var playerTwo = new Player("mr. money bags");
  var playerThree = new Player("Eugene");
  var playerFour = new Player("Chinese New Year");
  var playerFive = new Player("Filabani");
  var playerList = [playerOne, playerTwo, playerThree, playerFour, playerFive];
  var handSlots = [];
  var hintSlots = [];

  // deal cards to each player
  for (var i = 0; i < playerList.length; i++) {
    deck.deal(playerList[i]);
  };

  // creating starting configuration
  var config = new Config(deck, 8, playerList[0], playerList, playedPiles, discardPiles, [], 0, handSlots, hintSlots, true);
  var startGame = true;
  if (startGame == true) {
    runGame(config);
  };
};
