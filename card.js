// [1] [2] Player 2 wins 1 to 0
// [4] [3] Player 1 wins 1 to 0
// [9] [J] Player 2 wins 1 to 0
// [1] [1] No winner
// [1,2] [4,5] Player 2 wins 2 to 0
// [1,5] [2,3] No winner
// [1,2,3] [3,4,5] Player 2 wins in 2 rounds

require('chai').should();

var giveMeTheWinner = function() {
  return '';
};

describe('Cards', function() {
  it('player 2 wins with a single card', function() {

    giveMeTheWinner(['1'], ['2']).should.eql('Player 2 wins 1 to 0');
  });
});