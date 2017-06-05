Calculator = function() {
    this.value = 0;
};
 
Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Argument must be a number");
    }
};

Calculator.prototype.subtract = function(number) {
	if (typeof(number) == "number") {
		this.value -= number;
	} else {
		alert("Argument mustbe a number")
	}
}

Calculator.prototype.multiply = function(number) {
	if (typeof(number) == "number"){
		if (this.value == 0) {
			this.value += number;
		} else {
			this.value *= number;
		}
	} else {
		alert("Argument must be a number")
	}
}