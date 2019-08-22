const Game = require('./game.js');

function View() {
  this.game = new Game(); 
}

View.prototype.setupBoard = function () {
  this.renderHTML();
};

View.prototype.getHTML = function() {
  return '<ul>' +
    `<li id="0">${this.game.grid[0][0]}</li>` +
    `<li id="1">${this.game.grid[0][1]}</li>` +
    `<li id="2">${this.game.grid[0][2]}</li>` +
    `<li id="3">${this.game.grid[1][0]}</li>` +
    `<li id="4">${this.game.grid[1][1]}</li>` +
    `<li id="5">${this.game.grid[1][2]}</li>` +
    `<li id="6">${this.game.grid[2][0]}</li>` +
    `<li id="7">${this.game.grid[2][1]}</li>` +
    `<li id="8">${this.game.grid[2][2]}</li>` +
   `</ul>`;

};

View.prototype.bindEvents = function() {
  let self = this; 
  $('li').on('click', function(e) { 
    console.log("clicked");
    self.game.playMove(e.target.id);
    self.renderHTML();
  });
};

View.prototype.renderHTML = function(){
  let $el = $('.ttt');
  $el.empty();
  $el.append(this.getHTML());
  this.bindEvents();
  if (this.game.wins('X')) {
    $el.append('<h1>X wins!</h1>')
    
  } else if (this.game.boardfull()) {
    $el.append("<h1>It's a draw!</h1>")
  } else if (this.game.wins('O')) {
    $el.append('<h1>O wins!</h1>')
  }

};



module.exports = View; 