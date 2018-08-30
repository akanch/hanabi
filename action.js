// action is used to keep track of all actions by players
function Action() {
  this.ownCard = false;
  this.elseCard = false;
  this.hint = false;
  this.discard = false;
  this.play = false;
}

/*
var lastAction = null;
var dicardPile = [];
canvas.onmousedown = function(e) {
    var regions = [clue, dicard, hand, play];

    if (clickedRegion(hand)) {
        giveRedBackground(discard);
        giveGreenBackground(play);
    }

    if (clickedDicardPile(e.x, e.y) {
       var cardToBeDiscarded = lastAction.card;

        // move to dicard.
        if (cardToBeDiscarded.color == "blue")


    }
    lastAction.card = cardAt(e.x, e.y);
    //redraw
}
*/
