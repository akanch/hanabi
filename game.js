function runGame(config) {
  var action = new Action();
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
    setInterval(function() {
      drawBoard(config);
    }, 100);

    /*
    // test discard and release function, works

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

    //drawBoard(config);
    //config = update(config);

    //if (config.wrongGuesses == 3) {
      // return lose and break
    //};
    //window.setInterval(drawBoard(config), 20);

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
    //if (config.x > windowX - cardWidth * 6 && config.action.selectCard == false
      //&& config.y < 50 + cardHeight + (config.playerList.indexOf(config.currentPlayer))) {
      //for (var i = 0; i < config.handSlots.length; i++) {
        //if (config.handSlots[i])
        //config.handSlots[i].ifSelect(config.x, config.y);
      //drawSelected(config.handSlots[i]);
      //console.log(config.handSlots[i]);
    if (ifSelectOwn(config) == true) {
      for (i = 0; i < config.handSlots.length; i++) {
        if (config.handSlots[i].selected == false && config.selectedCard == false) {
          config.handSlots[i].ifSelect(config.x, config.y);
          if (config.handSlots[i].selected == true) {
            config.selectedCard = true;
            break;
          }
        }
        else if (config.handSlots[i].selected == true && config.selectedCard == true) {
          console.log('hello world');
          config.handSlots[i].ifSelect(config.x, config.y);
          if (config.handSlots[i].selected == false) {
            console.log('hello world');
            config.selectedCard = false;
            break;
          }
        } else {
          //console.log('hello world')
          continue;
        }
      };
    }


  };
};

// function to check if current player selected own cards
function ifSelectOwn(config) {
  var currentSlots = [];
  var playerIndex = config.playerList.indexOf(config.currentPlayer);
  var currentSlots = config.handSlots.slice(playerIndex * 5, playerIndex * 5 + 5);

  if (config.x < currentSlots[4].cardX + cardWidth && config.x > currentSlots[0].cardX
    && config.y < currentSlots[0].cardY + cardHeight && config.y > currentSlots[4].cardY) {
      //console.log(currentSlots);
      return true;
    } else {
    return false;
  };
}


//function if

function hello() {
  console.log('hello');
}


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
