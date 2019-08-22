const View = require('./view.js')// require appropriate file
const Game = require('./game.js');// require appropriate file

  $(() => {
    let view = new View(); 
    view.setupBoard();
  });
