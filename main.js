

  // test discard piles
  //blueDiscard.add(newDeck.cards.pop());
  //blueDiscard.add(newDeck.cards.pop());

/*

  if (discarded.color == 'blue') {
    blueDiscard.add(discarded);
  }
  else if (discarded.color == 'green') {
    greenDiscard.add(discarded);
  }
  else if (discarded.color == 'red') {
    redDiscard.add(discarded);
  }
  else {
    yellowDiscard.add(discarded);
  };


  // red token slots
  var radiusRed = 30;
  xRed = xFirstRow + 30;
  yRed = cardHeight + 80;
  for (i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(xRed, yRed, radiusRed, 0,2*Math.PI);
    ctx.stroke();

    // red token drawing test
    red = new Token('#d50000');
    red.draw(xRed, yRed);
    xRed += 70;
  };
};
*/
function Main() {
  var deck = new Deck();
  deck.shuffle();
  var playerList = [];
  // discard piles
  var blueDiscard = new Discard();
  var greenDiscard = new Discard();
  var redDiscard = new Discard();
  var whiteDiscard = new Discard();
  var yellowDiscard = new Discard();
  var discardPiles = [blueDiscard, greenDiscard, redDiscard, whiteDiscard, yellowDiscard];
  var playerOne = new Player("Sophmonster");
  var playerTwo = new Player("mr. money bags");
  var playerThree = new Player("Eugene");
  var playerFour = new Player("Chinese New Year");
  var playerFive = new Player("Filabani");
  var playerList = [playerOne, playerTwo, playerThree, playerFour, playerFive];

  // deal cards to each player
  for (var i = 0; i < playerList.length; i++) {
    deck.deal(playerList[i]);
  };

  // creating starting configuration
  var config = new Config(deck, 8, playerList[0], playerList, discardPiles, [], 0, true);
  var startGame = true;
  if (startGame == true) {
    runGame(config);
  };
};
