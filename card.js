// [1] [2] Player 2 wins 1 to 0
// [4] [3] Player 1 wins 1 to 0
// [9] [J] Player 2 wins 1 to 0
// [1] [1] No winner
// [1,2] [4,5] Player 2 wins 2 to 0
// [1,5] [2,3] No winner
// [1,2,3] [3,4,5] Player 2 wins in 2 rounds

require('chai').should();

var cardRanking = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
var giveMeTheWinner = function(pack1, pack2) {
  var player1CardRank = cardRanking.indexOf(pack1[0]);
  var player2CardRank = cardRanking.indexOf(pack2[0]);
  if (player1CardRank > player2CardRank) {
    return 'Player 1 wins 1 to 0';
  } else if (player1CardRank < player2CardRank) {
    return 'Player 2 wins 1 to 0';
  } else {
    return 'No winner';
  }

};

describe('Cards', function() {
  it('player 2 wins with a single card', function() {
    giveMeTheWinner(['1'], ['2']).should.eql('Player 2 wins 1 to 0');
  });
  it('player 2 wins with a single card with non-numeric cards', function() {
    giveMeTheWinner(['Q'], ['K']).should.eql('Player 2 wins 1 to 0');
  });
  it('no winner with the same card', function() {
    giveMeTheWinner(['Q'], ['Q']).should.eql('No winner');
  });
});