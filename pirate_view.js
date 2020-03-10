var View = function() {
	this.shipSelector = "MyShip1";
	this.buttonSelector = 'button';
}

View.prototype = function() {
	getShip = function() {
		return document.querySelector(this.shipSelector);
	},

	setship = function() {
		var ship = this.getShip();
		ship.style.left = location;
	},

	getButton = function() {
		return document.querySelector(this.buttonSelector);
	}
} 