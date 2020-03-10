window.onload = function () {
	var view = new View();
	var ship = new PirateShip();
	var controller = new Controller(view, ship);
	controller.prototype.bindListeners();
};

var Controller = function(display , model) {
	this._display = display;
	this._model = model;
};

Controller.prototype = function(){
	bindListeners = function() {
		var button = this.display.getButton();
		button.addEventListener('click', this.moveModel.bind(this));
	},

	moveModel = function() {
    this.model.incrementLocation();
    var newLocation = this.model.location;
    this.display.setShip(newLocation);
 
	};
}