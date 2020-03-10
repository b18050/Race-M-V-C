var PirateShip = function() {
	this.name = "Myship";
	this.location = 10;
}

PirateShip.prototype.incrementLocation = function() {
	this.location = this.location + 10;
};