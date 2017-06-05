describe("Calculator", function() {
 
    beforeEach(function() {
        calc = new Calculator();
    });
    describe('Addition function', function() {
        it('should add two numbers together and return the result', function() {
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });
 
        it("should not return 4 if the numbers given don't add up to 4", function() {
            calc.add(12);
            calc.add(7);
            expect(calc.value).toBe(19);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.add();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
});

describe("Calculator", function() {
 
    beforeEach(function() {
        calc = new Calculator();
    });
    describe('Subtract function', function() {
        it('should subtract two numbers together and return the result', function() {
            calc.subtract(8);
            calc.subtract(2);
            expect(calc.value).toBe(-10);
        });
 
        it("should not return 6 if the numbers given don't amount up to 4", function() {
            calc.subtract(12);
            calc.subtract(7);
            expect(calc.value).toBe(-19);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.add();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
});

describe("Calculator", function() {
 
    beforeEach(function() {
        calc = new Calculator();
    });
    describe('Multiply function', function() {
        it('should Multiply two numbers together and return the result', function() {
            calc.multiply(8);
            calc.multiply(2);
            expect(calc.value).toBe(16);
        });
 
        it("should not return 6 if the numbers given don't amount up to 4", function() {
            calc.multiply(4);
            calc.multiply(7);
            expect(calc.value).toBe(28);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.add();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
});