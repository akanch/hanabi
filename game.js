function Game() {
  // shuffled deck created (there is on still in main)
  var newDeck = new Deck([1, 1, 1, 2, 2, 3, 3, 4, 4, 5]);
  deckX = 15;
  var deckY = 15;
  newDeck.shuffle();
  for (i = 0; i < newDeck.cards.length; i++){
    newDeck.cards[i].draw(deckX, deckY);
    deckX += 10;
  };

  // create player object
  

  //
};
