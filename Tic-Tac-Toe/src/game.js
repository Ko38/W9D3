function Game() {
  this.grid = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
  this.keyMap = {
    0: { x: 0, y: 0 },
    1: { x: 0, y: 1 },
    2: { x: 0, y: 2 },
    3: { x: 1, y: 0 },
    4: { x: 1, y: 1 },
    5: { x: 1, y: 2 },
    6: { x: 2, y: 0 },
    7: { x: 2, y: 1 },
    8: { x: 2, y: 2}
  };

  this.isXturn = true;
}

Game.prototype.playMove = function(id) {
  let position = this.keyMap[id];

  if (this.wins('X') || this.wins('O')) {
    return
  }
  if ((this.grid[position.x][position.y]) !== ' ') {
    return 
  }
  let move = this.isXturn ? 'X' : 'O';
  this.grid[position.x][position.y] = move;
  this.isXturn = !this.isXturn;

}

Game.prototype.wins = function(move) {

  for (let i = 0; i < this.grid.length; i++) {

    if (this.grid[i][0] === move && this.grid[i][1] === move && this.grid[i][2] === move) {
      return true;
      }
    if (this.grid[0][i] === move && this.grid[1][i] === move && this.grid[2][i] === move) {
      return true
    }
  }
  if (this.grid[0][0] === move && this.grid[1][1] === move && this.grid[2][2] === move) {
    return true;
  }
  if (this.grid[0][2] === move && this.grid[1][1] === move && this.grid[2][0] === move) {
    return true;
  }
  return false;
}

Game.prototype.boardfull = function() {
  for (let i = 0; i < this.grid.length; i++) {
    for (let j = 0; j < this.grid[i].length; j++) {

      if (this.grid[i][j] === ' ') {
        return false;
      }
    }
  }
  return true;
}


module.exports = Game;