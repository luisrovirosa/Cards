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
  var player1CardRank2 = cardRanking.indexOf(pack1[1]);
  var player2CardRank2 = cardRanking.indexOf(pack2[1]);
  var scorePlayer1 = 0, scorePlayer2 = 0;
  if (player1CardRank > player2CardRank) {
    ++scorePlayer1;
  } else if (player1CardRank < player2CardRank) {
    ++scorePlayer2;
  }
  if (player1CardRank2 > player2CardRank2) {
    ++scorePlayer1;
  } else if (player1CardRank2 < player2CardRank2) {
    ++scorePlayer2;
  }

  if (scorePlayer1 > scorePlayer2) {
    return 'Player 1 wins ' + scorePlayer1 + ' to ' + scorePlayer2;
  } else if (player1CardRank < player2CardRank) {
    return 'Player 2 wins ' + scorePlayer2 + ' to ' + scorePlayer1;
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
  it('player 2 wins with 2 cards', function() {
    giveMeTheWinner(['1', '2'], ['4', '5']).should.eql('Player 2 wins 2 to 0');
  });
});