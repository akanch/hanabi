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
        var released = config.currentPlayer.release(config.handIndex - startIdx);
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

      // checks if current player decides to play her own card
      if (selectPlay(config) == true) {
        released = config.currentPlayer.release(config.handIndex - startIdx);
        for (var i = 0; i < config.playedPiles.length; i++) {
          if (released.color == config.playedPiles[i].color) {
            if (released.number == 5 && config.playedPiles[i].pile.length == 4 && config.numBlueTokens < 8) {
              config.correctGuesses.push(released);
              config.playedPiles[i].add(released);
              if (config.currentDeck.cards.length != 0) {
                config.currentPlayer.drawCard(config.currentDeck.cards);
              }
              config.numBlueTokens++;
            }
            else if (released.number == config.playedPiles[i].pile.length + 1) {
              config.correctGuesses.push(released);
              config.playedPiles[i].add(released);
              if (config.currentDeck.cards.length != 0) {
                config.currentPlayer.drawCard(config.currentDeck.cards);
              }
            } else {
              for (var i = 0; i < config.discardPiles.length; i++) {
                if (released.color == config.discardPiles[i].color && config.numWrongGuesses < 3) {
                  config.discardPiles[i].add(released);
                  config.numWrongGuesses++;
                  if (config.currentDeck.cards.length != 0) {
                    config.currentPlayer.drawCard(config.currentDeck.cards);
                  }
                }
                else if (config.numWrongGuesses == 3) {
                  config.gameOn = false;
                }
              }
            }
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
      }

      // check if current player is choosing to give a hint to another player
      if (selectOthers(config) == true) {
        console.log('hi');
        var hint = config.hintSlots[config.hintIndex].hint;
        if (config.hintIndex < 5) {
          for (i = 0; i < config.playerList[config.otherHandsIdx].hand.length; i++) {
            var currentNum = config.playerList[config.otherHandsIdx].hand[i].number;
            var currentCard = config.playerList[config.otherHandsIdx].hand[i];
            if (hint == currentNum) {
              currentCard.numberHint = true;
            }
          }
          updateTurn(config);
        }
        else if (config.hintIndex >= 5) {
          for (i = 0; i < config.playerList[config.otherHandsIdx].hand.length; i++) {
            var currentColor = config.playerList[config.otherHandsIdx].hand[i].color;
            var currentCard = config.playerList[config.otherHandsIdx].hand[i];
            if (hint == currentColor) {
              currentCard.colorHint = true;
            }
          }
          updateTurn(config);
        }
      }

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
  && config.action.ownCard == false && config.numBlueTokens > 0) {
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

// function to check if current player is playing her own card
function selectPlay(config) {
  var x = 5;
  var playY = 210;
  if (config.action.ownCard == true && config.x > x && config.x < x + 700
  && config.y > playY && config.y < playY + cardHeight + 20) {
    return true;
  } else {
    return false;
  };
};

// function to check if current player is selecting the hand of another player to give hint
function selectOthers(config) {
  var x = windowX - cardWidth * 6;
  var y = 50;
  var playerIndex = config.playerList.indexOf(config.currentPlayer)
  if (config.action.hint == true && config.x > x && config.x < x + cardWidth * 5 + 4) {
    for (i = 0; i < config.playerList.length; i++) {
      if (i != playerIndex) {
        if (config.y > y && config.y < y + cardHeight) {
          config.otherHandsIdx = i;
          return true;
        }
      }
      y += cardHeight + 60;
    }
  }
  return false;
};

// function that resets actions and updates the turn of current player at end of turn
function updateTurn(config) {
  if (config.handIndex != null) {
    config.handSlots[config.handIndex].selected = false;
  };
  if (config.hintIndex != null) {
    config.hintSlots[config.hintIndex].selected = false;
  };
  config.handIndex = null;
  config.hintIndex = null;
  config.action.ownCard = false;
  config.action.hint = false;
  config.action.discard = false;
  config.action.play = false;
  var idx = config.playerList.indexOf(config.currentPlayer);
  config.currentPlayer.turn = false;
  config.otherHandsIdx = null;

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
};
