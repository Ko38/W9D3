

function HanoiView (game, domEl) { //
  this.game = game; 
  this.domEl = domEl; 
  this.setupTowers();
}


HanoiView.prototype.setupTowers = function() {
  this.domEl.append(
  '<ul>' +
  '<li class="disk1"> </li>' +
  '<li class="disk2"> </li>' +
  '<li class="disk3"> </li>' +
  '</ul>' +
   '<ul>' +
  '<li> </li>' +
  '<li> </li>' +
  '<li> </li>' +
  '</ul>' +

  '<ul>' +
  '<li> </li>' +
  '<li> </li>' +
  '<li> </li>' +
  '</ul>'
  
  );
  
};

module.exports = HanoiView;