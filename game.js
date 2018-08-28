function runGame(config) {
    config.currentPlayer.turn = true;
    //ctx.font = "30px Arial";
    //ctx.fillText(config.playerList[4].turn,400,400);
    var y = 400;
    for (var i = 0; i < config.playerList.length; i++) {
      if (config.playerList[i].turn == false) {
        config.playerList[i].revealHand();
      }
    };

    //document.addEventListener('click',  getClickPos);
    document.addEventListener('click', update(config));
    //console.log(config);
    //document.addEventListener('click', update.bind(null, config));


    // test discard and release function, works
    /*
    var discarded = config.currentPlayer.release();
    config.discardPiles[2].add(discarded);
    discarded = config.currentPlayer.release();
    config.discardPiles[0].add(discarded);
    discarded = config.currentPlayer.release();
    config.discardPiles[1].add(discarded);
    discarded = config.currentPlayer.release();
    config.discardPiles[3].add(discarded);
    discarded = config.currentPlayer.release();
    config.discardPiles[4].add(discarded);

    // test drawCard function, works
    config.currentPlayer.drawCard(config.currentDeck.cards);

    // test drawing correct piles
    config.correctGuesses.push(config.playerList[1].release());
    config.correctGuesses.push(config.playerList[1].release());
    config.correctGuesses.push(config.playerList[2].release());
    config.correctGuesses.push(config.playerList[2].release());
    config.correctGuesses.push(config.playerList[3].release());
    config.correctGuesses.push(config.playerList[3].release());
    config.correctGuesses.push(config.playerList[4].release());
    config.correctGuesses.push(config.playerList[4].release());
    config.correctGuesses.push(config.playerList[4].release());
    */

    drawBoard(config);
    //config = update(config);

    //if (config.wrongGuesses == 3) {
      // return lose and break
    //};
};

function getClickPos(event) {
  var x = event.clientX;
  var y = event.clientY;
  console.log(x, y);
};

// update the configuration of the game
function update(config) {
  return function(event) {
    config.x = event.pageX;
    config.y = event.pageY;
  };
};
/*
function Game(playerList) {
// creating the board for the game
ctx.rect(0, 0, windowX, windowY);
ctx.fillStyle = '#6e777a';
ctx.fill();

// slot for the deck
ctx.rect(deckX, deckY, cardWidth, cardHeight);
ctx.stroke();


  // shuffled deck created (there is on still in main)
  var newDeck = new Deck([1, 1, 1, 2, 2, 3, 3, 4, 4, 5]);
  newDeck.shuffle();
  };

  // discard piles
  blueDiscard = new Discard();
  greenDiscard = new Discard();
  redDiscard = new Discard();
  yellowDiscard = new Discard();

  // test discard piles
  blueDiscard.add(newDeck.cards.pop());
  blueDiscard.add(newDeck.cards.pop());

  // draw discarded piles
  var discardPiles = [blueDiscard, greenDiscard, redDiscard, whiteDiscard, yellowDiscard];
  yDiscard = 275;
  deckX = 15;
  for (i = 0; i < 4; i++) {
    for (j = 0; j < discardPiles[i].pile.length; j++) {
      var currentPile = discardPiles[i];
      currentPile.pile[j].draw(deckX, yDiscard);
      deckX += cardWidth + 5;
    }
    yDiscard += cardHeight + 5;
  };



  // create player object


  //
};
*/
