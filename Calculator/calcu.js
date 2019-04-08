const subtraction = require('./calculation/subtraction');
const addition = require('./calculation/addition');
const division = require('./calculation/division');


class Calculator {
    calculate(operator, firstNumber, secondNumber) {
        return operator.operate(firstNumber, secondNumber);
    }
}


calculator = new Calculator();
console.log("Subtraction : "+ calculator.calculate(new subtraction(), process.argv[2], process.argv[3]));
console.log("Addition : "+ calculator.calculate(new addition(), process.argv[2], process.argv[3]));
try {
    console.log("Division : "+ calculator.calculate(new division(), process.argv[2], process.argv[3]));
}
catch(e) {
    console.log(e);
}
