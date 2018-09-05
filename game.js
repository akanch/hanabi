function runGame(config) {
  config.currentPlayer.turn = true;
  var y = 400;
  for (var i = 0; i < config.playerList.length; i++) {
    if (config.playerList[i].turn == false) {
      config.playerList[i].revealHand();
    }
  };

  // event listener to register clicks and update config object based on the click
  document.addEventListener('click', update(config));

  // draw updated gameboard configuration
  setInterval(function() {
    drawBoard(config);
  }, 100);

    /*

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

// update the configuration of the game
function update(config) {
  return function(event) {
    if (config.gameOn == true) {
      config.x = event.pageX;
      config.y = event.pageY;

      // if the current player decides to select one of her own cards
      var startIdx = findIdx(config);
      if (selectOwn(config) == true) {
        for (i = startIdx; i < startIdx + 5; i++) {
          if (config.handSlots[i].selected == false && config.handIndex != i) {
            config.handSlots[i].ifSelect(config.x, config.y);
            if (config.handSlots[i].selected == true && config.action.ownCard == true) {
              config.handSlots[config.handIndex].selected = false;
              config.action.ownCard = true;
              config.handIndex = i;
              break;
            }
            else if (config.handSlots[i].selected == true) {
              config.action.ownCard = true;
              config.handIndex = i;
              break;
            }
          }
          else if (config.handSlots[i].selected == true && config.action.ownCard == true) {
            config.handSlots[i].ifSelect(config.x, config.y);
            if (config.handSlots[i].selected == false) {
              config.action.ownCard = false;
              config.handIndex = null;
              break;
            }
          }
        }
      };

      // if current player decides to discard her own card
      if (selectDiscard(config) == true) {
        released = config.currentPlayer.release(config.handIndex - startIdx);
        for (i = 0; i < config.discardPiles.length; i++) {
          if (released.color == config.discardPiles[i].color) {
            config.discardPiles[i].add(released);
            if (config.currentDeck.cards.length != 0) {
              config.currentPlayer.drawCard(config.currentDeck.cards);
            }
            if (config.numBlueTokens < 8) {
              config.numBlueTokens += 1;
            }
            break;
          }
        }
        updateTurn(config);
      }

      // checks if selected one of the hints
      if (selectHint(config) == true) {
        for (i = 0; i < config.hintSlots.length; i++) {
          if (config.hintSlots[i].selected == false && config.hintIndex != i) {
            config.hintSlots[i].ifSelect(config.x, config.y);
            if (config.hintSlots[i].selected == true && config.action.hint == true) {
              config.hintSlots[config.hintIndex].selected = false;
              config.hintIndex = i;
              config.action.hint = true;
              break;
            }
            else if (config.hintSlots[i].selected == true) {
              config.action.hint = true;
              config.hintIndex = i;
              break;
            }
          }
          else if (config.hintSlots[i].selected == true && config.action.hint == true) {
            config.hintSlots[i].ifSelect(config.x, config.y);
            if (config.hintSlots[i].selected == false) {
              config.action.hint = false;
              config.hintIndex = null;
              break;
            }
          }
        };
      };

      // see if all players have 4 cards, if so, end game
      var count = 0;
      for (i = 0; i < config.playerList.length; i++) {
        if (config.playerList[i].hand.length == 4) {
          count++;
        }
      }
      if (count == config.playerList.length) {
        config.gameOn = false;
      }


    };
  };
};

// function to find the hand slots of the current player
function findIdx(config) {
  var playerIndex = config.playerList.indexOf(config.currentPlayer);
  return playerIndex * 5
};


// function to check if current player selected own cards
function selectOwn(config) {
  var currentSlots = [];
  var playerIndex = config.playerList.indexOf(config.currentPlayer);
  var currentSlots = config.handSlots.slice(playerIndex * 5, playerIndex * 5 + 5);

  if (config.x < currentSlots[4].cardX + cardWidth && config.x > currentSlots[0].cardX
    && config.y < currentSlots[0].cardY + cardHeight && config.y > currentSlots[4].cardY
    && config.action.elseCard == false && config.action.hint == false
    && config.action.discard == false && config.action.play == false) {
      return true;
    } else {
    return false;
  };
};

// function to check if current player selected one of the hints
function selectHint(config) {
  if (config.x > config.hintSlots[0].hintX && config.x < config.hintSlots[9].hintX + 60
  && config.y > config.hintSlots[0].hintY && config.y < config.hintSlots[9].hintY + 60
  && config.action.ownCard == false) {
    return true;
  } else {
    return false;
  };
};

// function to determine if current player is deciding to discard her own card
function selectDiscard(config) {
  var x = 5;
  var discardY = 210 + cardHeight + 20;
  if (config.action.ownCard == true && config.x > x && config.x < x + 700
  && config.y > discardY && config.y < discardY + cardHeight * 5 + 40) {
    return true;
  } else {
    return false;
  };
};

// function that resets actions and updates the turn of current player at end of turn
function updateTurn(config) {
  config.handSlots[config.handIndex].selected = false;
  config.handIndex = null;
  config.action.ownCard = false;
  config.action.hint = false;
  config.action.discard = false;
  config.action.play = false;
  var idx = config.playerList.indexOf(config.currentPlayer);
  config.currentPlayer.turn = false;

  // updates currentPlayer
  if (idx < 4) {
    config.currentPlayer = config.playerList[idx + 1];
  }
  else {
    config.currentPlayer = config.playerList[0];
  }
  config.currentPlayer.turn = true;
  config.currentPlayer.hideHand();
  // reveals the hand of current player
  for (var i = 0; i < config.playerList.length; i++) {
    if (config.playerList[i].turn == false) {
      config.playerList[i].revealHand();
    }
  };
} ;
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
